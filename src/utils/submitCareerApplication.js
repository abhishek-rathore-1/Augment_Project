const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "f4c6ad19-fe35-417e-969a-4993a1cf6277";

export const MAX_CAREER_ATTACHMENT_SIZE_BYTES = 5 * 1024 * 1024;

const createCareerFormData = ({
  name,
  email,
  phone,
  technology,
  resume,
  jobTitle,
}) => {
  const formData = new FormData();

  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("subject", `Career application: ${jobTitle}`);
  formData.append("from_name", name);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("position", jobTitle);
  formData.append("technology", technology);
  formData.append(
    "message",
    [
      `Position: ${jobTitle}`,
      `Technology focus: ${technology}`,
      phone ? `Phone: ${phone}` : null,
      resume ? `Resume filename: ${resume.name}` : null,
      "Submitted from the careers page.",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  if (resume) {
    formData.append("attachment", resume);
  }

  return formData;
};

const sendCareerFormData = async (formData) => {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
  });
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to submit the application.");
  }

  return result;
};

export const submitCareerApplication = async (payload) => {
  try {
    await sendCareerFormData(createCareerFormData(payload));

    return {
      success: true,
      attachmentSent: Boolean(payload.resume),
    };
  } catch (error) {
    if (!payload.resume) {
      throw error;
    }

    const shouldRetryWithoutAttachment = /attachment|file|upload|pro|plan|multipart/i.test(
      String(error.message || ""),
    );

    if (!shouldRetryWithoutAttachment) {
      throw error;
    }

    await sendCareerFormData(
      createCareerFormData({
        ...payload,
        resume: null,
      }),
    );

    return {
      success: true,
      attachmentSent: false,
    };
  }
};
