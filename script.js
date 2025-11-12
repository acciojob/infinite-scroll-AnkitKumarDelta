const list = document.querySelector('ol');

let count = 10;
for (let i = 1; i <= count; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}

function addMoreItems() {
  for (let i = 1; i <= 2; i++) {
    count++;
    const li = document.createElement('li');
    li.textContent = `Item ${count}`;
    list.appendChild(li);
  }
}

list.addEventListener('scroll', () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addMoreItems();
  }
});
