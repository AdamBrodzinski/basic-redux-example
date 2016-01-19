// payload - Object
//   name: String
export function updateName(payload) {
  // return metadata to a dispatch function
  return {
    type: "UPDATE_NAME", // key for reducer to 'switch' on
    name: payload.name,
  }
}
