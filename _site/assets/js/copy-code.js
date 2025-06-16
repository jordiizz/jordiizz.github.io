
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.copy-button').forEach(button => {
      button.addEventListener('click', function() {
        
        const codeBlock = this.closest('.code-block').querySelector('pre code');
        const code = codeBlock.innerText;
        
        navigator.clipboard.writeText(code.trim())
          .then(() => {
            
            this.textContent = '✓ Copiado!';
            setTimeout(() => {
              this.textContent = 'Copiar';
            }, 2000);
          })
          .catch(err => {
            console.error('Error al copiar:', err);
            this.textContent = 'Error';
          });
      });
    });
  });