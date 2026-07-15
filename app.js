document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year dynamically
  const currentYearElement = document.getElementById('currentYear');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Copy to Clipboard Functionality
  const copyBtn = document.getElementById('copyBtn');
  const tooltip = document.getElementById('tooltip');
  const emailAddress = 'charchris@sivoravong.com';

  if (copyBtn && tooltip) {
    // Keep reference to original SVG icon and tooltip text
    const originalIconHTML = copyBtn.innerHTML;
    const originalTooltipText = tooltip.textContent;

    // Checkmark SVG for success state
    const checkIconHTML = `
      <svg class="copy-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span class="tooltip-text" id="tooltip">Copied!</span>
    `;

    copyBtn.addEventListener('click', async () => {
      try {
        // Use modern navigator clipboard API
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailAddress);
          showSuccessState();
        } else {
          // Fallback for older browsers or insecure environments
          fallbackCopyText(emailAddress);
        }
      } catch (err) {
        console.error('Failed to copy email: ', err);
        // Direct feedback on failure
        tooltip.textContent = 'Failed to copy';
        setTimeout(() => {
          tooltip.textContent = originalTooltipText;
        }, 2000);
      }
    });

    function showSuccessState() {
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = checkIconHTML;
      
      // Keep tooltip visible during the success state
      const activeTooltip = copyBtn.querySelector('#tooltip');
      if (activeTooltip) {
        activeTooltip.style.visibility = 'visible';
        activeTooltip.style.opacity = '1';
        activeTooltip.style.transform = 'translateX(-50%) translateY(0)';
      }

      // Revert back to original state after 2 seconds
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = originalIconHTML;
      }, 2200);
    }

    function fallbackCopyText(text) {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      
      // Avoid scrolling to bottom on mobile/desktop
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          showSuccessState();
        } else {
          throw new Error('execCommand returned false');
        }
      } catch (err) {
        console.error('Fallback copy failed: ', err);
        tooltip.textContent = 'Copy not supported';
      } finally {
        document.body.removeChild(textArea);
      }
    }
  }
});
