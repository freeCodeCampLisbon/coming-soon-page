export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'homepage') {
    return '/ '
  }

  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  return '/not-found'
}
