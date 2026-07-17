import { Box, Typography } from '@mui/material'
import logo from '../assets/ls-logo.png'

type BrandMarkProps = {
  compact?: boolean
}

function BrandMark({ compact = false }: BrandMarkProps) {
  const logoWidth = compact ? 38 : 47

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: compact ? 0 : 1.2, color: 'text.primary' }}>
      <Box
        aria-hidden="true"
        sx={{
          width: logoWidth,
          flexShrink: 0,
          p: 0.35,
          borderRadius: '10px',
          bgcolor: '#f6fcff',
          backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #dff8fb 100%)',
          border: '1px solid rgba(128, 225, 239, 0.78)',
          boxShadow: '0 8px 18px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box component="img" src={logo} alt="" sx={{ width: '100%', height: 'auto', display: 'block' }} />
      </Box>
      {!compact && (
        <Box sx={{ display: 'grid', gap: 0.05, lineHeight: 1 }}>
          <Typography
            component="span"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1rem', sm: '1.08rem' },
              letterSpacing: '-0.045em',
              lineHeight: 1.05,
              background: 'linear-gradient(95deg, #b9f5f4 0%, #18c1d4 48%, #397cf4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            LeeanSeean
          </Typography>
          <Typography component="span" sx={{ color: '#9ed9ed', fontWeight: 700, fontSize: '0.49rem', letterSpacing: '0.18em', lineHeight: 1.15 }}>
            TECHNOLOGIES
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default BrandMark
