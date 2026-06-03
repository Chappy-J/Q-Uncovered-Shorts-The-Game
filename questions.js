<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Q Uncovered Shorts — a daily challenge of knowledge and risk.">
<title>Q Uncovered Shorts</title>
<link rel="icon" href="assets/q-logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="grain"></div>
<div class="wrap">
  <header>
    <div class="kicker">A daily challenge of knowledge &amp; risk</div>
    <div class="lockup">
      <img src="assets/q-logo.png" alt="Q logo">
      <div class="wordmark">Q Uncovered<br><span class="em">Shorts</span></div>
    </div>
    <div class="sub">Four questions. One guess each. Two reward the <b style="color:var(--amber)">most uncommon</b> right answer &mdash; two reward how high you <b style="color:var(--green-br)">rank</b>.</div>
    <button class="howbtn" onclick="openHow()">How scoring works</button>
  </header>

  <div class="progress" id="progress"></div>
  <div id="game"></div>

  <div class="summary" id="summary">
    <div class="totalcard">
      <div class="kicker">Your score today</div>
      <div class="total"><span id="totalNum">0</span><small>/400</small></div>
      <div class="pct" id="totalPct">0%</div>
      <div class="breakdown" id="breakdown"></div>
    </div>
    <div class="actions">
      <button class="primary" onclick="copyResult()" id="copyBtn">Copy results</button>
      <button onclick="location.reload()">Play again</button>
    </div>
    <div class="recap" id="recap"></div>
  </div>

  <footer id="footer">Q UNCOVERED SHORTS</footer>
</div>

<div class="ov" id="howOv">
  <div class="modal">
    <h2>How to play</h2>
    <p class="lead">One guess per question. Every answer scores 0&ndash;100, for a max of 400. Click the field or type to search the answer list.</p>
    <div class="rule"><div class="ic U">U</div>
      <p><b>Uniqueness (Q1 &amp; Q2).</b> Any correct answer scores &mdash; but points climb the <b>fewer people</b> would name it. An obvious pick still earns ~70; a deep cut almost no one thinks of approaches 100.</p></div>
    <div class="rule"><div class="ic R">R</div>
      <p><b>Rank (Q3 &amp; Q4).</b> There&rsquo;s one objective ranked list. The true #1 scores <b>100</b>, #2 scores 90, and so on. A famous-but-not-quite answer earns partial credit; anything off the board scores 0.</p></div>
    <button class="closeb" onclick="closeHow()">Got it</button>
  </div>
</div>

<script src="questions.js"></script>
<script src="game.js"></script>
</body>
</html>
