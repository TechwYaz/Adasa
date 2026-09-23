export const siteInfo = {
  name: 'عدسة',
  description:
    'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.',
  aboutDescription:
    'مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.',
}

export const formatDate = (value) =>
  new Intl.DateTimeFormat('ar-EG', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
