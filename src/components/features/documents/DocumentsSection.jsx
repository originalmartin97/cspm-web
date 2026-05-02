import React, { useState } from 'react'
import { Box, Card, CardActionArea, CardContent, Chip, Stack, Typography as MuiTypography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import documentsData from '../../../data/documents'
import DocumentViewer from './DocumentViewer'

const formatDate = (value) => {
  if (!value) return null

  const parsedDate = new Date(value)
  if (Number.isNaN(parsedDate.getTime())) return value

  return new Intl.DateTimeFormat('hu-HU', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(parsedDate)
}

const DocumentsSection = () => {
  const [viewerOpen, setViewerOpen] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState(null)

  const handleDocumentClick = (document) => {
    setSelectedDocument(document)
    setViewerOpen(true)
  }

  const handleCloseViewer = () => {
    setViewerOpen(false)
    setSelectedDocument(null)
  }

  return (
    <>
      <Grid container spacing={2.5} sx={{ mt: 0.5 }}>
        {documentsData.map((document) => {
          const formattedDate = formatDate(document.publishedAt)

          return (
            <Grid key={document.id} item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  width: '100%',
                  borderRadius: '18px',
                  border: '1px solid rgba(40, 68, 115, 0.08)',
                  boxShadow: '0 6px 18px rgba(40, 68, 115, 0.08)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 14px 28px rgba(40, 68, 115, 0.16)',
                    borderColor: 'rgba(40, 68, 115, 0.15)',
                    '& .document-card-indicator': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <CardActionArea
                  onClick={() => handleDocumentClick(document)}
                  sx={{ height: '100%', p: 0 }}
                  aria-label={`Dokumentum megnyitása: ${document.title}`}
                >
                  <CardContent
                    sx={{
                      height: '100%',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.5,
                    }}
                  >
                    <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1.5}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '14px',
                          background: 'linear-gradient(135deg, rgba(40, 68, 115, 0.12), rgba(218, 165, 32, 0.18))',
                          color: 'rgba(40, 68, 115, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <DescriptionOutlinedIcon />
                      </Box>

                      <Box
                        className="document-card-indicator"
                        sx={{
                          opacity: 0.65,
                          transform: 'translateX(-2px)',
                          transition: 'all 0.25s ease',
                          color: 'rgba(40, 68, 115, 0.65)',
                          mt: 0.5,
                        }}
                      >
                        <OpenInNewOutlinedIcon sx={{ fontSize: 20 }} />
                      </Box>
                    </Stack>

                    <MuiTypography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'rgba(40, 68, 115, 0.94)',
                        lineHeight: 1.25,
                        minHeight: '2.5em',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {document.title}
                    </MuiTypography>

                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                      {document.size && <Chip size="small" label={document.size} sx={{ backgroundColor: 'rgba(40, 68, 115, 0.07)' }} />}
                      {formattedDate && <Chip size="small" label={formattedDate} sx={{ backgroundColor: 'rgba(218, 165, 32, 0.12)' }} />}
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      {documentsData.length === 0 && (
        <Box
          sx={{
            mt: 2,
            p: 3,
            borderRadius: '16px',
            border: '1px dashed rgba(40, 68, 115, 0.18)',
            textAlign: 'center',
            color: 'rgba(40, 68, 115, 0.72)',
            backgroundColor: 'rgba(166, 203, 232, 0.06)',
          }}
        >
          <MuiTypography variant="body1">
            A dokumentumok listája még nincs feltöltve.
          </MuiTypography>
        </Box>
      )}

      <DocumentViewer open={viewerOpen} document={selectedDocument} onClose={handleCloseViewer} />
    </>
  )
}

export default DocumentsSection