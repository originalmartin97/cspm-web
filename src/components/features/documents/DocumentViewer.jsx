import React from 'react'
import { Box, Chip, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography as MuiTypography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined'

const formatDate = (value) => {
  if (!value) return null

  const parsedDate = new Date(value)
  if (Number.isNaN(parsedDate.getTime())) return value

  return new Intl.DateTimeFormat('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(parsedDate)
}

const DocumentViewer = ({ open, document, onClose }) => {
  const viewerUrl = document?.url ? `${document.url}#toolbar=0&navpanes=0&scrollbar=1` : ''
  const formattedDate = formatDate(document?.publishedAt)

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      scroll="paper"
      PaperProps={{
        sx: {
          borderRadius: '24px',
          boxShadow: '0 24px 70px rgba(40, 68, 115, 0.28)',
          overflow: 'hidden',
          height: { xs: '92vh', md: '90vh' },
          maxHeight: { xs: '92vh', md: '90vh' },
          background: 'rgba(255, 255, 255, 0.98)',
          border: '1px solid rgba(40, 68, 115, 0.08)',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
      aria-labelledby="document-viewer-title"
    >
      <DialogTitle
        id="document-viewer-title"
        sx={{
          pr: 7,
          py: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          borderBottom: '1px solid rgba(40, 68, 115, 0.08)',
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: '14px',
            background: 'linear-gradient(135deg, rgba(40, 68, 115, 0.14), rgba(218, 165, 32, 0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(40, 68, 115, 0.9)',
            flexShrink: 0,
          }}
        >
          <PictureAsPdfOutlinedIcon />
        </Box>

        <Box sx={{ minWidth: 0, flex: 1 }}>
          <MuiTypography variant="h5" component="h2" sx={{ fontWeight: 700, color: 'rgba(40, 68, 115, 0.94)' }}>
            {document?.title || 'Dokumentum megnyitása'}
          </MuiTypography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
            {document?.size && <Chip size="small" label={document.size} sx={{ backgroundColor: 'rgba(40, 68, 115, 0.08)' }} />}
            {formattedDate && <Chip size="small" label={formattedDate} sx={{ backgroundColor: 'rgba(218, 165, 32, 0.12)' }} />}
          </Stack>
        </Box>

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 12,
            top: 12,
            color: 'rgba(40, 68, 115, 0.7)',
            backgroundColor: 'rgba(40, 68, 115, 0.04)',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          flex: 1,
          minHeight: 0,
        }}
      >
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            backgroundColor: '#f7f9fc',
            display: 'flex',
          }}
        >
          <Box sx={{ flex: 1, minHeight: 0, display: 'flex' }}>
            {viewerUrl ? (
              <Box
                component="iframe"
                title={document?.title ? `${document.title} PDF viewer` : 'Dokumentum PDF viewer'}
                src={viewerUrl}
                sx={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
              />
            ) : (
              <Box
                sx={{
                  flex: 1,
                  minHeight: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4,
                  textAlign: 'center',
                }}
              >
                <MuiTypography variant="body1" sx={{ color: 'rgba(40, 68, 115, 0.74)' }}>
                  A dokumentum nem érhető el.
                </MuiTypography>
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default DocumentViewer