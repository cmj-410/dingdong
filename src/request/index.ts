// const baseurl = 'http://127.0.0.1:4523/mock/965479/api'
const baseurl = 'http://127.0.0.1:3000/api'

export async function mypost (address: string, bodymsg: object) {
  const url = baseurl + address
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodymsg as BodyInit)
  })
  return response
}

export async function myget (address: string) {
  const url = baseurl + address
  const response = await fetch(url)
  return response
}

// export async function mypatch (address: string, bodymsg: object) {
//   const url = baseurl + address
//   const response = await fetch(url, {
//     method: 'patch',
//     mode: 'no-cors',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(bodymsg as BodyInit)
//   })
//   return response
// }
