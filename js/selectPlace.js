// select toggle close
document.addEventListener('click', function (event) {
const buttons = document.querySelectorAll('[data-bs-toggle="collapse"]');
    buttons.forEach(button => {
        const targetSelector = button.getAttribute('data-bs-target');
        const collapseElement = document.querySelector(targetSelector);
        const targetElement = event.target; // Clicked element

        // Check if the clicked element is outside the collapse and the button
        if (!collapseElement.contains(targetElement) && !button.contains(targetElement)) {
            const collapseInstance = bootstrap.Collapse.getInstance(collapseElement); // Get collapse instance
            if (collapseInstance && collapseElement.classList.contains('show')) {
                collapseInstance.hide(); // Close collapse
            }
        }
    });
});

$(document).ready(function() {
    const dataUrl = '/js/selectPlace.json';
    
    // Function to generate HTML
    function generateHtml(data, keyId) {
        return data.map((item, index) => `
            <div class="col-3 mb-2">
                <input type="radio" class="btn-check" name="options-base" id="${keyId}_${index + 1}" autocomplete="off">
                <label class="btn btn-radio btn-radio-lg" for="${keyId}_${index + 1}">${item.name}</label>
            </div>
        `).join('');
    }
  
    // Fetch the JSON data and generate the HTML
    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            const listKey = Object.keys(data);
            listKey.map((keyId) => {
                document.getElementById(keyId).innerHTML = generateHtml(data[keyId], keyId);
            });
            
            // 綁定Radio事件
            $('#selectPlace_confirmButton').on('click', function() {
                const selectedRadio = $('input[name="options-base"]:checked');
                if (selectedRadio.length > 0) {
                  const selectedText = $('label[for="' + selectedRadio.attr('id') + '"]').text();
                  $('#selectPlaceButton').text(selectedText);
                  $('#collapseSelectPlace').collapse('hide');
                } else {
                //   alert('請選擇一個選項');
                }
              });
        })
        .catch(error => console.error('Error loading JSON data:', error));
  });
  