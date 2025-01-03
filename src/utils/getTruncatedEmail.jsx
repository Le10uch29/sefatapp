export const getTruncatedEmail = (email) => {
    const [username, domain] = email.split("@");
    if (!domain) return "";
    const truncatedUsername = username.length > 5 ? username.slice(0, 5) + "..." : username;
    return `${truncatedUsername}@${domain}`;
  };
  