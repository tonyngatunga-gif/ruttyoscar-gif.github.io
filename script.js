function checkAvailability() {
    alert("Tickets for Dar - Songea are available for this week! TSH 64,000/=");
}

function handleBooking(event) {
    event.preventDefault();
    const name = document.getElementById('custName').value;
    alert("Thank you " + name + "! Your request for Rutty Travel has been received. We will contact you at 0622121172.");
}