# node-terminalMusic

<h1> Terminal Music Downlader </h1>

<p> A really simple module to download music <p>

<b>Installation:</b>

<p> 1. CLone the project and run npm install in the project directory. </p>

<p> 2. Download the ffmpeg library from <a href="https://www.ffmpeg.org/download.html">FFMPEG</a> </p>

<p> 3. Copy the library in the project root directory and name the folder to ffmpeg </p>

<p> 4. Obtain a <b>YOUTUBE DATA API KEY</b> from the google developer console. </p>

<p> 5. Create a downloads folder in the project root directory </p>

<b> How to use: </b>

 <h3> Run 
    
      node server.js --a="song_name"  
 </h3>
 
 <h3> Example: 
    
     node server.js --a="Pink Floyd - hey you"  
 </h3>
 
 <p> You can also pass multiple values to the --a parameter seprating them with a comma ',' </p>
 
 <h3> Example: 
   
     node server.js --a="Pink Floyd - hey you, Pink Floyd - Another brick"  
    
 </h3>
