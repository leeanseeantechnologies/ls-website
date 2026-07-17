import { useState, type FormEvent } from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Drawer,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  ArrowOutwardRounded,
  CheckCircleRounded,
  CloseRounded,
  MenuRounded,
  RocketLaunchRounded,
  SchoolRounded,
  SouthEastRounded,
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import BrandMark from './BrandMark'
import AnimatedSection from './AnimatedSection'
import SectionHeading from './SectionHeading'
import { navigation, services, technologies } from '../data/siteContent'

const displayFont = 'Georgia, "Times New Roman", serif'

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const submitContactForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <Box sx={{ overflow: 'hidden', bgcolor: 'background.default' }}>
      <Box className="ambient ambient-one" />
      <Box className="ambient ambient-two" />

      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(6, 20, 43, 0.72)', backdropFilter: 'blur(18px)', borderBottom: '1px solid rgba(177, 208, 255, 0.10)' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 76 }, justifyContent: 'space-between' }}>
            <a href="#top" className="brand-link" aria-label="LeeanSeean Technologies home">
              <BrandMark />
            </a>

            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navigation.map((item) => (
                <Button key={item.href} href={item.href} color="inherit" sx={{ color: 'text.secondary', px: 1.4, '&:hover': { color: 'text.primary', bgcolor: 'transparent' } }}>
                  {item.label}
                </Button>
              ))}
              <Button href="#contact" variant="contained" color="primary" endIcon={<ArrowOutwardRounded fontSize="small" />} sx={{ ml: 1.4, color: '#06142b' }}>
                Start a conversation
              </Button>
            </Stack>

            <IconButton onClick={() => setMenuOpen(true)} aria-label="Open menu" sx={{ display: { md: 'none' }, color: 'text.primary' }}>
              <MenuRounded />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={menuOpen} onClose={closeMenu} PaperProps={{ sx: { width: 310, bgcolor: '#0a1b38', backgroundImage: 'none', p: 2 } }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <BrandMark compact />
          <IconButton onClick={closeMenu} aria-label="Close menu"><CloseRounded /></IconButton>
        </Stack>
        <Stack spacing={0.8}>
          {navigation.map((item) => (
            <Button key={item.href} href={item.href} onClick={closeMenu} color="inherit" sx={{ justifyContent: 'flex-start', p: 1.4, fontSize: '1.05rem' }}>
              {item.label}
            </Button>
          ))}
          <Button href="#contact" onClick={closeMenu} variant="contained" color="primary" sx={{ color: '#06142b', mt: 1.5 }}>
            Start a conversation
          </Button>
        </Stack>
      </Drawer>

      <Box component="main" id="top">
        <Box component="section" sx={{ position: 'relative', pt: { xs: 8, md: 13 }, pb: { xs: 9, md: 13 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.06fr 0.94fr' }, gap: { xs: 7, lg: 5 }, alignItems: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}>
                <Chip label="THE NEXT ERA OF DIGITAL" sx={{ mb: 3, bgcolor: 'rgba(110, 231, 210, 0.11)', color: 'primary.light', border: '1px solid rgba(110, 231, 210, 0.2)', fontWeight: 800, letterSpacing: '0.1em', fontSize: '0.68rem' }} />
                <Typography variant="h1" sx={{ maxWidth: 690, fontSize: { xs: '3.25rem', sm: '4.4rem', md: '5.65rem' }, lineHeight: { xs: 0.98, md: 0.94 } }}>
                  Built for what’s <Box component="span" sx={{ color: 'primary.main' }}>next.</Box>
                </Typography>
                <Typography sx={{ mt: 3.1, maxWidth: 560, color: 'text.secondary', fontSize: { xs: '1.06rem', md: '1.21rem' }, lineHeight: 1.75 }}>
                  LeeanSeean Technologies designs intelligent digital products that help organisations move with clarity, confidence, and purpose.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ mt: 4.1 }}>
                  <Button href="#products" size="large" variant="contained" color="primary" endIcon={<ArrowOutwardRounded />} sx={{ color: '#06142b', px: 2.6 }}>
                    Explore our products
                  </Button>
                  <Button href="#about" size="large" variant="outlined" color="inherit" sx={{ borderColor: 'rgba(203, 224, 255, 0.26)', '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(110, 231, 210, 0.05)' } }}>
                    Discover our approach
                  </Button>
                </Stack>
                <Stack direction="row" spacing={{ xs: 2, sm: 3.5 }} sx={{ mt: 5.5, color: 'text.secondary' }}>
                  <Box><Typography sx={{ color: 'text.primary', fontWeight: 800, fontSize: '1.25rem' }}>Human</Typography><Typography variant="body2">centred design</Typography></Box>
                  <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(178, 208, 255, 0.16)' }} />
                  <Box><Typography sx={{ color: 'text.primary', fontWeight: 800, fontSize: '1.25rem' }}>Built</Typography><Typography variant="body2">to scale securely</Typography></Box>
                </Stack>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.96, x: 16 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}>
                <Box sx={{ position: 'relative', maxWidth: 530, mx: 'auto' }}>
                  <Box sx={{ position: 'absolute', inset: '12% -3% -5% 14%', borderRadius: '42px', background: 'linear-gradient(135deg, rgba(84, 111, 255, 0.4), rgba(110, 231, 210, 0.14))', filter: 'blur(38px)' }} />
                  <Paper elevation={0} sx={{ position: 'relative', p: { xs: 2.2, sm: 3 }, borderRadius: '30px', border: '1px solid rgba(183, 215, 255, 0.17)', background: 'linear-gradient(152deg, rgba(19, 46, 88, 0.9), rgba(9, 25, 54, 0.94))', boxShadow: '0 28px 70px rgba(0, 0, 0, 0.36)' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Stack direction="row" spacing={0.8}><Box className="window-dot dot-red" /><Box className="window-dot dot-yellow" /><Box className="window-dot dot-green" /></Stack>
                      <Typography variant="caption" sx={{ color: 'text.secondary', letterSpacing: '0.06em' }}>LEEANSEEAN / INSIGHT</Typography>
                    </Stack>
                    <Box sx={{ mt: 3.2, display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 1.7 }}>
                      <Paper elevation={0} sx={{ p: 2.2, minHeight: 160, borderRadius: '18px', bgcolor: 'rgba(4, 17, 41, 0.46)', border: '1px solid rgba(183, 215, 255, 0.1)' }}>
                        <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.12em' }}>Connected systems</Typography>
                        <Typography sx={{ mt: 1, fontFamily: displayFont, fontSize: { xs: '1.65rem', sm: '2.05rem' }, lineHeight: 1.05 }}>Designed around people.</Typography>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2.2 }}><Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'primary.main', boxShadow: '0 0 13px #6ee7d2' }} /><Typography variant="caption" color="primary.light">Systems working in harmony</Typography></Stack>
                      </Paper>
                      <Paper elevation={0} sx={{ p: 2.2, borderRadius: '18px', bgcolor: 'rgba(101, 126, 255, 0.16)', border: '1px solid rgba(153, 177, 255, 0.17)' }}>
                        <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.1em' }}>Clarity</Typography>
                        <Typography sx={{ fontSize: '2rem', fontWeight: 800, mt: 1 }}>01</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.5 }}>One connected foundation.</Typography>
                      </Paper>
                    </Box>
                    <Paper elevation={0} sx={{ mt: 1.7, p: 2.2, borderRadius: '18px', bgcolor: 'rgba(8, 20, 45, 0.53)', border: '1px solid rgba(183, 215, 255, 0.1)' }}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center"><Typography sx={{ fontWeight: 700 }}>From ideas to impact</Typography><SouthEastRounded sx={{ color: 'primary.main' }} /></Stack>
                      <LinearProgress variant="determinate" value={78} sx={{ mt: 2, height: 6, borderRadius: 10, bgcolor: 'rgba(192, 220, 255, 0.12)', '& .MuiLinearProgress-bar': { borderRadius: 10, bgcolor: 'primary.main' } }} />
                      <Stack direction="row" justifyContent="space-between" sx={{ mt: 1 }}><Typography variant="caption" color="text.secondary">Discover</Typography><Typography variant="caption" color="primary.light">Deliver</Typography></Stack>
                    </Paper>
                  </Paper>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>

        <Box component="section" id="about" sx={{ py: { xs: 9, md: 14 }, position: 'relative' }}>
          <Container maxWidth="lg">
            <AnimatedSection>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
                <SectionHeading eyebrow="Who we are" title="A thoughtful technology partner." />
                <Box sx={{ pt: { md: 4 } }}>
                  <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.6rem' }, lineHeight: 1.55, color: '#dceaff', fontWeight: 500 }}>
                    We turn ambitious ideas into dependable digital experiences—from the first concept to the systems people rely on every day.
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 2.6, lineHeight: 1.8, maxWidth: 670 }}>
                    Our work brings together product strategy, beautiful user interfaces, modern engineering, and practical intelligence. The result is technology that is easier to adopt, simpler to operate, and ready to grow.
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ mt: 4 }}>
                    {['Purposeful by design', 'Secure from the start', 'Built to evolve'].map((item) => (
                      <Stack key={item} direction="row" spacing={0.8} alignItems="center"><CheckCircleRounded sx={{ color: 'primary.main', fontSize: '1.1rem' }} /><Typography variant="body2" sx={{ color: '#dceaff', fontWeight: 650 }}>{item}</Typography></Stack>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </AnimatedSection>
          </Container>
        </Box>

        <Box component="section" id="products" sx={{ py: { xs: 8, md: 13 }, bgcolor: 'rgba(4, 15, 34, 0.42)', borderTop: '1px solid rgba(177, 208, 255, 0.08)', borderBottom: '1px solid rgba(177, 208, 255, 0.08)' }}>
          <Container maxWidth="lg">
            <AnimatedSection>
              <SectionHeading eyebrow="Our flagship product" title="A calmer, safer way to run a school." description="We are building a connected operating system that gives schools clarity and gives parents peace of mind." />
            </AnimatedSection>
            <AnimatedSection delay={0.12}>
              <Card sx={{ mt: 5.5, p: { xs: 2.2, sm: 4, md: 5 }, overflow: 'hidden', position: 'relative', border: '1px solid rgba(110, 231, 210, 0.25)', bgcolor: '#0b2042', backgroundImage: 'linear-gradient(135deg, rgba(31, 83, 122, 0.56), rgba(11, 32, 66, 0.9) 55%, rgba(58, 84, 185, 0.44))', boxShadow: '0 24px 60px rgba(0,0,0,0.22)' }}>
                <Box sx={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', bgcolor: 'rgba(110, 231, 210, 0.1)', filter: 'blur(16px)', right: -130, top: -215 }} />
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' }, gap: { xs: 5, md: 8 }, position: 'relative', alignItems: 'center' }}>
                  <Box>
                    <Chip icon={<RocketLaunchRounded sx={{ color: 'primary.main !important' }} />} label="COMING SOON" sx={{ bgcolor: 'rgba(110, 231, 210, 0.1)', color: 'primary.light', border: '1px solid rgba(110, 231, 210, 0.18)', fontWeight: 800, letterSpacing: '0.09em', fontSize: '0.67rem' }} />
                    <Typography variant="h2" sx={{ mt: 2.6, fontSize: { xs: '2.45rem', sm: '3.35rem' } }}>LSAI School OS</Typography>
                    <Typography sx={{ mt: 2, maxWidth: 530, color: 'text.secondary', fontSize: { xs: '1rem', sm: '1.12rem' }, lineHeight: 1.75 }}>
                      One platform for every school, every child, and every important moment. Academics, communication, transport, safety, and insights—working together.
                    </Typography>
                    <Button href="#contact" variant="text" color="primary" endIcon={<ArrowOutwardRounded />} sx={{ px: 0, mt: 2.5, '&:hover': { bgcolor: 'transparent', color: 'primary.light' } }}>
                      Register your interest
                    </Button>
                  </Box>
                  <Paper elevation={0} sx={{ p: 2.2, borderRadius: '22px', bgcolor: 'rgba(3, 16, 37, 0.5)', border: '1px solid rgba(179, 213, 255, 0.15)' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center"><Stack direction="row" spacing={1} alignItems="center"><Box sx={{ p: 0.8, borderRadius: 2, bgcolor: 'rgba(110, 231, 210, 0.16)', display: 'grid', placeItems: 'center' }}><SchoolRounded sx={{ color: 'primary.main', fontSize: 21 }} /></Box><Box><Typography sx={{ fontWeight: 800, lineHeight: 1.1 }}>Today’s journey</Typography><Typography variant="caption" color="text.secondary">A parent’s view</Typography></Box></Stack><Chip size="small" label="Safe" sx={{ bgcolor: 'rgba(110, 231, 210, 0.13)', color: 'primary.light', fontWeight: 700 }} /></Stack>
                    <Stack spacing={1.2} sx={{ mt: 2.5 }}>
                      {[['08:22', 'Entered school', 'primary.main'], ['09:00', 'Attendance marked', '#9db4ff'], ['15:40', 'Boarded bus', '#9db4ff'], ['16:15', 'Reached home stop', 'primary.main']].map(([time, label, color]) => (
                        <Stack key={time} direction="row" spacing={1.3} alignItems="center"><Typography variant="caption" sx={{ width: 38, color: 'text.secondary' }}>{time}</Typography><Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: color }} /><Typography variant="body2" sx={{ color: '#deebff' }}>{label}</Typography></Stack>
                      ))}
                    </Stack>
                  </Paper>
                </Box>
              </Card>
            </AnimatedSection>
          </Container>
        </Box>

        <Box component="section" id="services" sx={{ py: { xs: 9, md: 14 } }}>
          <Container maxWidth="lg">
            <AnimatedSection><SectionHeading eyebrow="What we do" title="Technology with a clear point of view." description="We balance vision and execution to create digital products that deliver lasting momentum." /></AnimatedSection>
            <Box sx={{ mt: 5.5, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
              {services.map((service, index) => (
                <AnimatedSection key={service.number} delay={index * 0.1}>
                  <Card className="service-card" sx={{ height: '100%', p: 3.2, bgcolor: 'rgba(15, 39, 79, 0.46)', border: '1px solid rgba(177, 208, 255, 0.12)', transition: 'transform .25s ease, border-color .25s ease, background .25s ease', '&:hover': { transform: 'translateY(-6px)', borderColor: 'rgba(110, 231, 210, 0.48)', bgcolor: 'rgba(18, 48, 93, 0.68)' } }}>
                    <Typography sx={{ fontFamily: displayFont, color: 'primary.main', fontSize: '1.55rem' }}>{service.number}</Typography>
                    <Typography variant="h3" sx={{ mt: 4.5, fontSize: '1.38rem' }}>{service.title}</Typography>
                    <Typography color="text.secondary" sx={{ mt: 1.6, lineHeight: 1.75 }}>{service.description}</Typography>
                    <ArrowOutwardRounded className="service-arrow" sx={{ mt: 3.4, color: 'primary.main' }} />
                  </Card>
                </AnimatedSection>
              ))}
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: 'rgba(8, 28, 61, 0.62)', borderTop: '1px solid rgba(177, 208, 255, 0.08)', borderBottom: '1px solid rgba(177, 208, 255, 0.08)' }}>
          <Container maxWidth="lg">
            <AnimatedSection>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.8fr 1.2fr' }, gap: { xs: 4, md: 9 }, alignItems: 'center' }}>
                <SectionHeading eyebrow="Our toolkit" title="Modern by default." />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
                  {technologies.map((technology) => <Chip key={technology} label={technology} sx={{ py: 2.2, px: 0.6, borderRadius: 2.3, bgcolor: 'rgba(188, 214, 255, 0.06)', border: '1px solid rgba(188, 214, 255, 0.16)', color: '#e5efff', fontWeight: 700, fontSize: '0.9rem' }} />)}
                </Box>
              </Box>
            </AnimatedSection>
          </Container>
        </Box>

        <Box component="section" id="vision" sx={{ py: { xs: 10, md: 15 } }}>
          <Container maxWidth="md">
            <AnimatedSection>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.13em', textTransform: 'uppercase' }}>Our vision</Typography>
                <Typography sx={{ fontFamily: displayFont, fontSize: { xs: '2.55rem', sm: '3.65rem', md: '4.65rem' }, letterSpacing: '-0.055em', lineHeight: 1.03, mt: 2.2, color: '#eef6ff' }}>
                  Build technology people can trust—and love to use.
                </Typography>
                <Typography color="text.secondary" sx={{ maxWidth: 620, mx: 'auto', mt: 3, lineHeight: 1.75, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                  We see a future where powerful software brings people closer to what matters, instead of creating more distance.
                </Typography>
              </Box>
            </AnimatedSection>
          </Container>
        </Box>

        <Box component="section" id="contact" sx={{ pb: { xs: 9, md: 13 } }}>
          <Container maxWidth="lg">
            <AnimatedSection>
              <Paper elevation={0} sx={{ position: 'relative', overflow: 'hidden', p: { xs: 2.4, sm: 4, md: 6 }, borderRadius: { xs: '24px', md: '30px' }, background: 'linear-gradient(125deg, #113767 0%, #0c2348 48%, #15335f 100%)', border: '1px solid rgba(142, 187, 255, 0.25)', boxShadow: '0 28px 65px rgba(0,0,0,0.22)' }}>
                <Box sx={{ position: 'absolute', width: 400, height: 400, right: -190, bottom: -220, borderRadius: '50%', bgcolor: 'rgba(110, 231, 210, 0.15)', filter: 'blur(18px)' }} />
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' }, gap: { xs: 4.5, md: 8 }, position: 'relative' }}>
                  <Box>
                    <Typography sx={{ color: 'primary.main', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.13em', textTransform: 'uppercase' }}>Let’s build something lasting</Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2.35rem', sm: '3.25rem' }, mt: 1.7, lineHeight: 1.02 }}>Have an idea worth moving forward?</Typography>
                    <Typography color="text.secondary" sx={{ mt: 2.2, lineHeight: 1.75, maxWidth: 420 }}>Tell us what you are aiming for. We would love to understand your challenge and explore the right next step together.</Typography>
                  </Box>
                  <Box component="form" onSubmit={submitContactForm}>
                    <Stack spacing={1.6}>
                      <TextField required label="Your name" variant="outlined" fullWidth />
                      <TextField required label="Email address" type="email" variant="outlined" fullWidth />
                      <TextField required label="Tell us a little about your idea" multiline minRows={3} variant="outlined" fullWidth />
                      <Button type="submit" variant="contained" color="primary" endIcon={<ArrowOutwardRounded />} sx={{ alignSelf: 'flex-start', color: '#06142b', mt: 0.4 }}>
                        Send enquiry
                      </Button>
                      {sent && <Typography role="status" color="primary.light" variant="body2">Thank you—your enquiry has been noted. We’ll be in touch soon.</Typography>}
                    </Stack>
                  </Box>
                </Box>
              </Paper>
            </AnimatedSection>
          </Container>
        </Box>
      </Box>

      <Box component="footer" sx={{ borderTop: '1px solid rgba(177, 208, 255, 0.1)', py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.2} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }}>
            <BrandMark />
            <Stack direction="row" spacing={2.4} flexWrap="wrap">
              {navigation.map((item) => <Typography key={item.href} component="a" href={item.href} className="footer-link" variant="body2">{item.label}</Typography>)}
            </Stack>
            <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} LeeanSeean Technologies</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default LandingPage
