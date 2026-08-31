/**
 * Google Drive Video Player Utility
 * Converts Google Drive sharing URLs to embeddable preview URLs
 * Handles responsive embedding with proper aspect ratio
 */

class GoogleDriveVideoPlayer {
    /**
     * Convert Google Drive file URL to embeddable preview URL
     * @param {string} driveUrl - URL like https://drive.google.com/file/d/FILE_ID/view
     * @returns {string} Embeddable URL or empty string if invalid
     */
    static convertToEmbedUrl(driveUrl) {
        if (!driveUrl || typeof driveUrl !== 'string') return '';

        // Extract FILE_ID from various Google Drive URL formats
        const patterns = [
            /drive\.google\.com\/file\/d\/([a-zA-Z0-9-_]+)/,
            /drive\.google\.com\/file\/u\/\d+\/d\/([a-zA-Z0-9-_]+)/,
            /([a-zA-Z0-9-_]{25,})/  // Fallback: direct FILE_ID
        ];

        let fileId = '';
        for (const pattern of patterns) {
            const match = driveUrl.match(pattern);
            if (match && match[1]) {
                fileId = match[1];
                break;
            }
        }

        if (!fileId) return '';

        // Return embeddable preview URL
        return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    /**
     * Create HTML for responsive Google Drive video embed
     * @param {string} driveUrl - Google Drive URL
     * @param {string} title - Video title for accessibility
     * @returns {string} HTML string for video embed
     */
    static createEmbedHTML(driveUrl, title = 'Project Video') {
        const embedUrl = this.convertToEmbedUrl(driveUrl);

        if (!embedUrl) {
            return `
                <div class="video-placeholder">
                    <p>PROJECT VIDEO COMING SOON</p>
                    <p class="video-placeholder-subtitle">Video URL not yet configured</p>
                </div>
            `;
        }

        return `
            <div class="video-container">
                <iframe
                    class="video-iframe"
                    src="${embedUrl}"
                    title="${title}"
                    allow="autoplay"
                    allowfullscreen
                    loading="lazy">
                </iframe>
            </div>
        `;
    }

    /**
     * Check if a Google Drive URL is properly formatted
     * @param {string} driveUrl - URL to validate
     * @returns {boolean} True if URL looks like a valid Google Drive link
     */
    static isValidDriveUrl(driveUrl) {
        if (!driveUrl || typeof driveUrl !== 'string') return false;
        return driveUrl.includes('drive.google.com') && driveUrl.includes('/file/');
    }
}

/**
 * Project Detail Page Manager
 * Handles navigation, previous/next project logic, and page initialization
 */
class ProjectDetailPage {
    constructor() {
        this.currentProjectSlug = this.getProjectSlugFromUrl();
        this.currentProject = this.findProjectBySlug(this.currentProjectSlug);
        this.init();
    }

    /**
     * Extract project slug from current URL
     * @returns {string} Project slug
     */
    getProjectSlugFromUrl() {
        const pathParts = window.location.pathname.split('/').filter(p => p);
        // URL format: /projects/project-slug/
        return pathParts[pathParts.length - 1] || '';
    }

    /**
     * Find project by slug
     * @param {string} slug - Project slug
     * @returns {object} Project object or null
     */
    findProjectBySlug(slug) {
        if (typeof PROJECTS === 'undefined') return null;
        return PROJECTS.find(p => p.slug === slug) || null;
    }

    /**
     * Get next project in sequence
     * @returns {object} Next project
     */
    getNextProject() {
        if (!this.currentProject) return null;
        const nextIndex = (this.currentProject.index + 1) % PROJECTS.length;
        return PROJECTS[nextIndex];
    }

    /**
     * Get previous project in sequence
     * @returns {object} Previous project
     */
    getPreviousProject() {
        if (!this.currentProject) return null;
        const prevIndex = (this.currentProject.index - 1 + PROJECTS.length) % PROJECTS.length;
        return PROJECTS[prevIndex];
    }

    /**
     * Initialize page with project data
     */
    init() {
        if (!this.currentProject) {
            this.showErrorPage();
            return;
        }

        this.populateProjectData();
        this.setupNavigation();
    }

    /**
     * Populate page with project data
     */
    populateProjectData() {
        const p = this.currentProject;

        // Hero section
        const heroImage = document.getElementById('projectHeroImage');
        if (heroImage) {
            heroImage.src = p.heroImage || p.thumbnail;
            heroImage.alt = p.title;
        }

        // Project metadata
        const elements = {
            'projectCategory': p.category.join(' / '),
            'projectTitle': p.title,
            'projectDescription': p.description,
            'projectYear': p.year,
            'projectRole': p.role,
            'projectDuration': p.duration,
            'projectTechnologies': p.technologies.join(', '),
            'projectProblem': p.problem,
            'projectGoal': p.goal,
            'projectProcess': p.process,
            'projectChallenges': p.challenges,
            'projectSolution': p.solution,
            'projectResult': p.result,
            'projectLearnings': p.learnings
        };

        Object.entries(elements).forEach(([id, content]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = content;
        });

        // Video embed
        this.embedVideo();

        // Navigation links
        this.setupProjectNavigation();
    }

    /**
     * Embed Google Drive video
     */
    embedVideo() {
        const videoContainer = document.getElementById('projectVideoContainer');
        if (!videoContainer) return;

        if (this.currentProject.videoUrl) {
            videoContainer.innerHTML = GoogleDriveVideoPlayer.createEmbedHTML(
                this.currentProject.videoUrl,
                `${this.currentProject.title} Demo Video`
            );
        } else {
            videoContainer.innerHTML = GoogleDriveVideoPlayer.createEmbedHTML(
                '', // Empty = shows placeholder
                `${this.currentProject.title} Demo Video`
            );
        }
    }

    /**
     * Setup project navigation (previous/next)
     */
    setupProjectNavigation() {
        const nextProject = this.getNextProject();
        const prevProject = this.getPreviousProject();

        const nextBtn = document.getElementById('nextProjectBtn');
        const prevBtn = document.getElementById('previousProjectBtn');

        if (nextBtn && nextProject) {
            nextBtn.href = `/projects/${nextProject.slug}/`;
            nextBtn.textContent = `${nextProject.title} →`;
        }

        if (prevBtn && prevProject) {
            prevBtn.href = `/projects/${prevProject.slug}/`;
            prevBtn.textContent = `← ${prevProject.title}`;
        }
    }

    /**
     * Setup navigation elements
     */
    setupNavigation() {
        const backBtn = document.getElementById('backToProjectsBtn');
        if (backBtn) {
            backBtn.href = '/#projects';
        }
    }

    /**
     * Show error if project not found
     */
    showErrorPage() {
        const main = document.querySelector('main');
        if (main) {
            main.innerHTML = `
                <section class="container" style="padding: 100px 0; text-align: center;">
                    <h1 style="margin-bottom: 20px;">Project Not Found</h1>
                    <p style="margin-bottom: 30px;">Sorry, this project doesn't exist.</p>
                    <a href="/" class="btn btn-primary">← Back to Portfolio</a>
                </section>
            `;
        }
    }
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Only run on project detail pages
    if (window.location.pathname.includes('/projects/')) {
        new ProjectDetailPage();
    }
});
