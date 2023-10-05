const input = document.getElementById("quote-input");
const result = document.getElementById("quote-result");

function getPanicQuote() {
  const quotes = input.value;
  const panicQuote = quotes.split(" ").join(" 😱 ").toUpperCase().concat("!");
  result.innerHTML = panicQuote;
  input.value = "";
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(result.innerHTML);
    alert("Content copied to clipboard");
    result.innerHTML = " ";
    /* Resolved - text copied to clipboard successfully */
  } catch (err) {
    alert("Failed to copy: ", err);
    /* Rejected - text failed to copy to the clipboard */
  }
}
