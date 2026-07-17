import { Box, Typography } from '@mui/material'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}

function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <Box sx={{ maxWidth: 680, mx: centered ? 'auto' : 0, textAlign: centered ? 'center' : 'left' }}>
      <Typography sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.13em', textTransform: 'uppercase', mb: 1.5 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: '2.2rem', sm: '3rem', md: '3.5rem' }, lineHeight: 1.04 }}>
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" sx={{ mt: 2, fontSize: { xs: '1rem', sm: '1.1rem' }, lineHeight: 1.75 }}>
          {description}
        </Typography>
      )}
    </Box>
  )
}

export default SectionHeading
