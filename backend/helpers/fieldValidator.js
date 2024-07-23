/**
 * Middleware To validate form inputs
 * @param {Array} fields
 * @returns {Object} validity - {error, message}
 */
export default function fieldValidator(fields) {
  for (const key in fields) {
    if (fields.hasOwnProperty(key)) {
      if (fields[key] === undefined) {
        return { error: true, message: `${key} is required` };
      }
      if (typeof fields[key] === "string" && fields[key] === "") {
        return { error: true, message: `${key} is required` };
      }
    }
  }
  return { error: false, message: "OK" };
}
