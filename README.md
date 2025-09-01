# PaperPulse Consulting Website

This directory contains the source files for the PaperPulse Consulting website.

## Publishing from GitHub Codespace

Follow these steps to publish the website to GitHub Pages from a GitHub Codespace environment:

1. **Initialize Git repository (if not already initialized):**
   ```bash
   git init
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Commit the files:**
   ```bash
   git commit -m "Initial commit of PaperPulse Consulting website"
   ```

4. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Enter repository name (e.g., `paperpulse-website`)
   - Choose Public or Private
   - Click "Create repository"

5. **Add remote origin:**
   ```bash
   git remote add origin https://github.com/<your-username>/paperpulse-website.git
   ```

6. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

7. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** > **Pages**
   - Under **Source**, select branch `main` and folder `/ (root)`
   - Click **Save**

8. **Access your website:**
   - After a few minutes, your site will be live at:
     ```
     https://<your-username>.github.io/paperpulse-website/
     ```

## Notes

- Make sure your `index.html` and all assets are in the root directory.
- Any changes pushed to the `main` branch will automatically update the GitHub Pages site.

If you want, I can help you run these commands and set up the repository from your Codespace.
