export function useCopy() {
  const copy = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        ElMessage.success('复制成功')
      })
      .catch(() => {
        ElMessage.error('复制失败，当前浏览器不支持')
      })
  }
  return [copy]
}
