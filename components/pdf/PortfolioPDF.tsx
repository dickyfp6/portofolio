import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
import { Profile } from '@/data/types';
import { Project } from '@/data/types';

// ============================================
// PDF Design System - Print-Optimized Styles
// ============================================
// IMPORTANT: @react-pdf/renderer is NOT a browser
// - No boxShadow, gap, or CSS shorthand
// - All spacing must be explicit
// - fontWeight max 700 for stability
// - letterSpacing minimal (≤0.5)

const styles = StyleSheet.create({
  // ============================================
  // BASE PAGE
  // ============================================
  page: {
    backgroundColor: '#ffffff',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'column',
  },

  // ============================================
  // COVER PAGE
  // ============================================
  coverPage: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 60,
    paddingBottom: 60,
    paddingLeft: 60,
    paddingRight: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Decorative accent (simplified, no complex effects)
  coverAccent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 250,
    height: 250,
    backgroundColor: '#3b82f6',
    opacity: 0.08,
    borderBottomLeftRadius: 150,
  },
  // Profile image container - fixed dimensions for stability
  coverProfileImageContainer: {
    width: 180,
    height: 225,
    marginBottom: 32,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#3b82f6',
  },
  coverProfileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  // Cover title - reduced letterSpacing for print stability
  coverTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#3b82f6',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  // Name - max fontSize 32, fontWeight 700
  coverName: {
    fontSize: 32,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 1.3,
  },
  coverRole: {
    fontSize: 18,
    fontWeight: 400,
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 1.4,
  },
  coverDivider: {
    width: 60,
    height: 3,
    backgroundColor: '#3b82f6',
    marginBottom: 24,
  },
  coverContact: {
    fontSize: 12,
    fontWeight: 400,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 6,
    lineHeight: 1.5,
  },

  // ============================================
  // IDENTITY PAGE
  // ============================================
  // ============================================
  // IDENTITY PAGE
  // ============================================
  identityPage: {
    paddingTop: 50,
    paddingBottom: 80, // Space for footer
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#ffffff',
  },
  // Row layout: image + text
  identityHeader: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  // Fixed width image container - no flexShrink needed
  identityProfileImageContainer: {
    width: 100,
    height: 125,
    marginRight: 25,
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#3b82f6',
  },
  identityProfileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  identityContent: {
    flex: 1,
  },
  // Section title with left border accent
  sectionTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 20,
    paddingLeft: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    lineHeight: 1.2,
  },
  identityName: {
    fontSize: 24,
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 6,
    lineHeight: 1.2,
  },
  identityRole: {
    fontSize: 15,
    fontWeight: 600,
    color: '#3b82f6',
    marginBottom: 16,
    lineHeight: 1.3,
  },
  identityBio: {
    fontSize: 12,
    fontWeight: 400,
    color: '#475569',
    lineHeight: 1.6,
    marginBottom: 0,
  },
  // Contact section - simple box layout
  contactSection: {
    marginTop: 30,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#f8fafc',
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#3b82f6',
  },
  contactTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  // Stacked contact rows
  contactRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: '#64748b',
    width: 80,
  },
  contactValue: {
    fontSize: 11,
    fontWeight: 400,
    color: '#334155',
    flex: 1,
    lineHeight: 1.4,
  },

  // ============================================
  // PROJECT PAGE
  // ============================================
  projectPage: {
    paddingTop: 50,
    paddingBottom: 80, // Space for footer
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#ffffff',
  },
  // Project header with title and metadata
  projectHeader: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 12,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 8,
    lineHeight: 1.2,
  },
  projectMeta: {
    fontSize: 11,
    fontWeight: 400,
    color: '#64748b',
    lineHeight: 1.4,
  },
  
  // ============================================
  // PROJECT CONTENT SECTIONS
  // Spacing rule: 8px title-to-content, 20px content-to-next-title
  // ============================================
  projectSection: {
    marginBottom: 0, // No bottom margin - controlled by next title's marginTop
  },
  projectSectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: '#1e293b',
    marginTop: 20, // Space from previous content
    marginBottom: 8, // Small gap to own content
    paddingLeft: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
    letterSpacing: 0.3,
    lineHeight: 1.3,
  },
  // First section needs no top margin (after header)
  projectSectionFirst: {
    marginTop: 0,
  },
  // Content body text
  projectText: {
    fontSize: 12,
    fontWeight: 400,
    color: '#475569',
    lineHeight: 1.6,
    marginBottom: 0,
  },
  
  // ============================================
  // BULLET POINTS
  // ============================================
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingLeft: 0,
  },
  bullet: {
    fontSize: 12,
    fontWeight: 700,
    color: '#3b82f6',
    marginRight: 10,
    width: 14,
  },
  bulletText: {
    fontSize: 11,
    fontWeight: 400,
    color: '#475569',
    lineHeight: 1.5,
    flex: 1,
  },
  
  // ============================================
  // TECH STACK BADGES
  // ============================================
  techStackContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0, // No margin - spacing controlled by parent
  },
  techBadge: {
    fontSize: 10,
    fontWeight: 600,
    color: '#1e40af',
    backgroundColor: '#dbeafe',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  
  // ============================================
  // FOOTER
  // ============================================
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  pageNumber: {
    fontSize: 10,
    fontWeight: 600,
    color: '#94a3b8',
  },
  footerName: {
    fontSize: 10,
    fontWeight: 400,
    color: '#64748b',
  },
});

interface PortfolioPDFProps {
  profile: Profile;
  selectedProjects: Project[];
  theme?: 'light' | 'dark';
}

export function PortfolioPDF({ profile, selectedProjects }: PortfolioPDFProps) {
  return (
    <Document>
      {/* Cover Page - Redesigned with Profile Picture */}
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.coverPage}>
          <View style={styles.coverAccent} />
          
          {profile.profileImage && (
            <View style={styles.coverProfileImageContainer}>
              <Image src={profile.profileImage} style={styles.coverProfileImage} />
            </View>
          )}
          
          <Text style={styles.coverTitle}>Professional Portfolio</Text>
          <Text style={styles.coverName}>{profile.fullName}</Text>
          <Text style={styles.coverRole}>{profile.title}</Text>
          
          <View style={styles.coverDivider} />
          
          <Text style={styles.coverContact}>{profile.contact.email}</Text>
          <Text style={styles.coverContact}>{profile.contact.location}</Text>
        </View>
      </Page>

      {/* Identity Page - Enhanced with Photo */}
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.identityPage}>
          <Text style={styles.sectionTitle}>About Me</Text>
          
          <View style={styles.identityHeader}>
            {profile.profileImage && (
              <View style={styles.identityProfileImageContainer}>
                <Image src={profile.profileImage} style={styles.identityProfileImage} />
              </View>
            )}
            
            <View style={styles.identityContent}>
              <Text style={styles.identityName}>{profile.fullName}</Text>
              <Text style={styles.identityRole}>{profile.title}</Text>
              
              <Text style={styles.identityBio}>{profile.shortBio}</Text>
            </View>
          </View>
          
          <View style={styles.contactSection}>
            <Text style={styles.contactTitle}>Contact Information</Text>
            
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>{profile.contact.email}</Text>
            </View>
            
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactValue}>{profile.contact.phone}</Text>
            </View>
            
            <View style={styles.contactRow}>
              <Text style={styles.contactLabel}>Location</Text>
              <Text style={styles.contactValue}>{profile.contact.location}</Text>
            </View>
            
            {profile.socialLinks.map((link) => (
              <View key={link.platform} style={styles.contactRow}>
                <Text style={styles.contactLabel}>{link.platform}</Text>
                <Text style={styles.contactValue}>{link.url}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerName}>{profile.fullName} • Portfolio</Text>
          <Text style={styles.pageNumber}>Page 1</Text>
        </View>
      </Page>

      {/* Project Pages - Enhanced Design */}
      {selectedProjects.map((project, index) => (
        <Page key={project.id} size="A4" orientation="landscape" style={styles.page}>
          <View style={styles.projectPage}>
            {/* Header */}
            <View style={styles.projectHeader}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectMeta}>
                {project.period} • {project.category}
              </Text>
            </View>
            
            {/* Overview */}
            <View style={styles.projectSection}>
              <Text style={[styles.projectSectionTitle, styles.projectSectionFirst]}>
                OVERVIEW
              </Text>
              <Text style={styles.projectText}>
                {project.detailedContent.overview}
              </Text>
            </View>
            
            {/* Key Approach */}
            <View style={styles.projectSection}>
              <Text style={styles.projectSectionTitle}>KEY APPROACH</Text>
              {project.detailedContent.approach.slice(0, 3).map((item, i) => (
                <View key={i} style={styles.bulletPoint}>
                  <Text style={styles.bullet}>▸</Text>
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              ))}
            </View>
            
            {/* Output - only if exists */}
            {project.detailedContent.output && (
              <View style={styles.projectSection}>
                <Text style={styles.projectSectionTitle}>OUTPUT</Text>
                <Text style={styles.projectText}>
                  {project.detailedContent.output}
                </Text>
              </View>
            )}
            
            {/* Tech Stack */}
            <View style={styles.projectSection}>
              <Text style={styles.projectSectionTitle}>TECHNOLOGY STACK</Text>
              <View style={styles.techStackContainer}>
                {project.techStack.map((tech) => (
                  <Text key={tech} style={styles.techBadge}>{tech}</Text>
                ))}
              </View>
            </View>
          </View>
          
          <View style={styles.footer}>
            <Text style={styles.footerName}>{profile.fullName} • Portfolio</Text>
            <Text style={styles.pageNumber}>Page {index + 2}</Text>
          </View>
        </Page>
      ))}
    </Document>
  );
}
