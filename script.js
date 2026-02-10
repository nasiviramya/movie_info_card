function showInfo(movie) {
  const info = document.getElementById("info");
  let content = "";

  if (movie === "tholiprema") {
    content = `
      <h2>Tholiprema (1998)</h2>
      <p>🎭 <strong>Hero:</strong> Pawan Kalyan</p>
      <p>💖 A classic Telugu romantic drama directed by A. Karunakaran. 
      It became a trendsetter for youthful love stories in Telugu cinema.</p>
    `;
  } 
  else if (movie === "thalapathi") {
    content = `
      <h2>Thalapathi (1991)</h2>
      <p>🔥 <strong>Hero:</strong> Rajinikanth</p>
      <p>🎬 Directed by Mani Ratnam, this film is known for its powerful story based on friendship, loyalty, and sacrifice. 
      Music by Ilaiyaraaja is iconic!</p>
    `;
  } 
  else if (movie === "hinanna") {
    content = `
      <h2>Hi Nanna (2023)</h2>
      <p>😎 <strong>Hero:</strong> Nani</p>
      <p>💫 A heartfelt emotional drama exploring love between a father, daughter, and a mysterious woman. 
      Directed by Shouryuv, with beautiful music by Hesham Abdul Wahab.</p>
    `;
  }

  info.innerHTML = content;
}