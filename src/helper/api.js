export const getAllNotes = async () => {
  const query = `
    query {
    listNotes {
      id,
      title,
      noteDescription,
      tag,
      addedAt
    }
  }
  `
  let response = await fetch('https://hfi519bvp7.execute-api.us-east-1.amazonaws.com/dev/notes', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: query,
  });
  let result = await response.json();
  return result.data.listNotes
}
