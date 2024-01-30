function showProductDetails(name, price) {
    var popup = document.getElementById('productPopup');
    var popupContent = document.getElementById('popupContent');

    popupContent.innerHTML = '<p>Name: ' + name + '</p>' +
        '<p>Price: ' + price + '</p>';

    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('productPopup');
    popup.style.display = 'none';
}