$(document).ready(function () { 
  $("section").hide().fadeIn(1000);
 
  $("header h1").hover(
    function () {
      $(this).css("color", "#ff6f00");
    },
    function () {
      $(this).css("color", "white");
    }
  ); 

  // $('#contactForm').on('submit', function (e) {
  //   e.preventDefault();

  //   const name = $('#name').val().trim();
  //   const email = $('#email').val().trim();
  //   const message = $('#message').val().trim();

  //   if (!name || !email || !message) {
  //     alert('❌ Please fill out all fields.');
  //     return;
  //   }

  //   alert(`✅ Message submitted!\n\nThank you, ${name}!`);
  //   $(this)[0].reset();
  // });
 
  


});


 
const form = document.getElementById('modalForm');
 
const showError = (element, message) => {
  clearError(element); // Clear previous error before showing a new one

  const error = document.createElement('div');
  error.className = 'text-danger input-error mb-1';
  error.textContent = message;
  element.parentNode.insertBefore(error, element);
};
 
const clearError = (element) => {
  const error = element.parentNode.querySelector('.input-error');
  if (error) error.remove();
};
 
const addLiveValidation = () => {
  const name = document.getElementById('modalName');
  const email = document.getElementById('modalEmail');
  const message = document.getElementById('modalMessage');
  const budget = document.getElementById('budget');
  const deadline = document.getElementById('deadline');

  name.addEventListener('input', () => {
    if (name.value.trim()) clearError(name);
  });

  email.addEventListener('input', () => {
    if (!email.value.trim()) {
      showError(email, 'Please enter your email.');
    } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      showError(email, 'Please enter a valid email address.');
    } else {
      clearError(email);
    }
  });

  message.addEventListener('input', () => {
    if (message.value.trim()) clearError(message);
  });

  budget.addEventListener('change', () => {
    if (budget.value) clearError(budget);
  });

  deadline.addEventListener('change', () => {
    if (deadline.value) clearError(deadline);
  });

  document.querySelectorAll('input[name="projectType"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const container = radio.closest('.mb-3');
      clearError(container);
    });
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const container = document.getElementById('techReact').closest('.mb-3');
      clearError(container);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('modalForm');

  const showError = (element, message) => {
    const container = element.closest('.mb-3');
    clearError(container); // clear first

    const error = document.createElement('div');
    error.className = 'text-danger input-error mb-1';
    error.textContent = message;
    container.insertBefore(error, container.firstChild);
  };

  const clearError = (container) => {
    const error = container.querySelector('.input-error');
    if (error) error.remove();
  };

  const addLiveValidation = () => {
    const name = document.getElementById('modalName');
    const email = document.getElementById('modalEmail');
    const message = document.getElementById('modalMessage');
    const budget = document.getElementById('budget');
    const deadline = document.getElementById('deadline');

    name.addEventListener('input', () => {
      if (name.value.trim()) clearError(name.closest('.mb-3'));
      else showError(name, 'Please enter your name.');
    });

    email.addEventListener('input', () => {
      const value = email.value.trim();
      if (!value) showError(email, 'Please enter your email.');
      else if (!/^\S+@\S+\.\S+$/.test(value)) showError(email, 'Please enter a valid email address.');
      else clearError(email.closest('.mb-3'));
    });

    message.addEventListener('input', () => {
      if (message.value.trim()) clearError(message.closest('.mb-3'));
      else showError(message, 'Please enter your message.');
    });

    budget.addEventListener('change', () => {
      if (budget.value) clearError(budget.closest('.mb-3'));
    });

    deadline.addEventListener('change', () => {
      if (deadline.value) clearError(deadline.closest('.mb-3'));
    });

    document.querySelectorAll('input[name="projectType"]').forEach(radio => {
      radio.addEventListener('change', () => {
        const container = radio.closest('.mb-3');
        clearError(container);
      });
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const container = checkbox.closest('.mb-3');
        if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0) {
          clearError(container);
        }
      });
    });
  };

  addLiveValidation();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelectorAll('.input-error').forEach(el => el.remove());

    const name = document.getElementById('modalName');
    const email = document.getElementById('modalEmail');
    const message = document.getElementById('modalMessage');
    const projectType = document.querySelector('input[name="projectType"]:checked');
    const technologies = document.querySelectorAll('input[type="checkbox"]:checked');
    const budget = document.getElementById('budget');
    const deadline = document.getElementById('deadline');

    let isValid = true;

    if (!name.value.trim()) {
      showError(name, 'Please enter your name.');
      isValid = false;
    }

    if (!email.value.trim()) {
      showError(email, 'Please enter your email.');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      showError(email, 'Please enter a valid email address.');
      isValid = false;
    }

    if (!message.value.trim()) {
      showError(message, 'Please enter your message.');
      isValid = false;
    }

    if (!projectType) {
      const container = document.querySelector('input[name="projectType"]').closest('.mb-3');
      showError(container.querySelector('input'), 'Please select a project type.');
      isValid = false;
    }

    if (technologies.length === 0) {
      const container = document.getElementById('techReact').closest('.mb-3');
      showError(container.querySelector('input'), 'Please select at least one technology.');
      isValid = false;
    }

    if (!budget.value) {
      showError(budget, 'Please select a budget.');
      isValid = false;
    }

    if (!deadline.value) {
      showError(deadline, 'Please choose a deadline.');
      isValid = false;
    }

    if (!isValid) return;

    alert(`✅ Your request has been submitted!\nThank you, ${name.value.trim()}!`);
    this.reset();

    const modal = bootstrap.Modal.getInstance(document.getElementById('applyModal'));
    modal.hide();
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  const showError = (element, message) => {
    const container = element.closest('.mb-3');
    clearError(container);
    const error = document.createElement('div');
    error.className = 'text-danger input-error mb-1';
    error.textContent = message;
    container.insertBefore(error, container.firstChild);
  };

  const clearError = (container) => {
    const error = container.querySelector('.input-error');
    if (error) error.remove();
  };

  // 🔁 Live validation
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  name.addEventListener('input', () => {
    if (name.value.trim()) clearError(name.closest('.mb-3'));
    else showError(name, 'Please enter your name.');
  });

  email.addEventListener('input', () => {
    const value = email.value.trim();
    if (!value) showError(email, 'Please enter your email.');
    else if (!/^\S+@\S+\.\S+$/.test(value)) showError(email, 'Enter a valid email.');
    else clearError(email.closest('.mb-3'));
  });

  message.addEventListener('input', () => {
    if (message.value.trim()) clearError(message.closest('.mb-3'));
    else showError(message, 'Please enter your message.');
  });

  // 📨 Submit validation
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    document.querySelectorAll('.input-error').forEach(el => el.remove());

    let isValid = true;

    if (!name.value.trim()) {
      showError(name, 'Please enter your name.');
      isValid = false;
    }

    if (!email.value.trim()) {
      showError(email, 'Please enter your email.');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
      showError(email, 'Enter a valid email.');
      isValid = false;
    }

    if (!message.value.trim()) {
      showError(message, 'Please enter your message.');
      isValid = false;
    }

    if (!isValid) return;

    // ✅ If valid
    alert(`✅ Message sent!\nThank you, ${name.value.trim()}!`);
    this.reset();
  });
});

