const testimonials = document.querySelectorAll('#testimonial');
  const comments = document.querySelectorAll('#comment');

  testimonials.forEach((testimonial, index) => {
    testimonial.addEventListener('click', () => {
      comments.forEach(comment => comment.classList.add('hidden'));

      comments[index].classList.remove('hidden');

      testimonials.forEach(t => {
        const name = t.querySelector('h6');
        if (name) name.classList.add('hidden');
      });

      const selectedName = testimonial.querySelector('h6');
      if (selectedName) selectedName.classList.remove('hidden');
    });
  });