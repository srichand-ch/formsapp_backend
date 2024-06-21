<h1>Backend Server for Form Submissions</h1>

<p>This backend server is designed to handle form submissions for a desktop application, providing endpoints for submitting, reading, and managing form data. It is built with <strong>Express</strong> and <strong>TypeScript</strong>, utilizing a JSON file as the database to store submissions.</p>

<h2>Setup</h2>

<p>To get started with the backend server, follow these steps:</p>



<h3>Installation</h3>

<ul>

<p>1. Clone the repository: </p>

<pre><code>git clone https://github.com/srichand-ch/formsapp_backend.git</code></pre>

<p>2. Navigate to the project directory</p>

<p>3. Install dependencies</p>

<pre><code>npm install</code></pre>

</ul>

<h3>Running the server</h3>

<p>To start the backend server:</p>

<ul>

<p>1. Open the Terminal</p>

<p>2. Navigate to the project directory</p>

<p>3. Run the following: </p>

<pre><code>npx ts-node src/index.ts</code></pre>

<p>This command uses 'ts-node' to directly execute TypeScript files ('src/index.ts'). It compiles TypeScript on-the-fly and runs the server.</p>

</ul>

<p>The server will start running on <a href="http://localhost:3000">http://localhost:3000</a></p>

<h2>Endpoints</h2>

<h3>Ping</h3>

<ul>
  <li>Endpoint: <a href="/ping">/ping</a></li>
  <li>Method: GET</li>
  <li>Description: Checks server status.</li>
  <li>Response: Returns { "success": true } if the server is running.</li>
</ul>

<h3>Submit Form</h3>

<ul>
  <li>Endpoint: <a href="/submit">/submit</a> </li>
  <li>Method: POST</li>
  <li>Parameters: JSON object with fields: 'name', 'email', 'phone', 'githubLink', 'stopwatchTime'.</li>
  <li>Description:  Stores a new form submission in the database.</li>
  <li>Response: Returns '{ "success": true, "message": "Submission saved" }' upon successful submission.</li>
</ul>

<h3>Read Form</h3>

<ul>
  <li>Endpoint: <a href="/read">/read</a> </li>
  <li>Method: GET</li>
  <li>Query Parameters: index (0-indexed position of the form submission)</li>
  <li>Description: Retrieves a form submission based on the specified index.</li>
  <li>Response: Returns the form submission object as JSON or '{ "error": "No submissions found" }' if no submissions are available.</li>
</ul>

<h3>Delete Form</h3>

<ul>
  <li>Endpoint: <a href="/delete">/delete</a> </li>
  <li>Method: DELETE</li>
  <li>Parameters: 'index' (0-indexed position of the form submission to delete)</li>
  <li>Description: Deletes a form submission based on the specified index.</li>
  <li>Response: Returns '{ "message": "Deletion successful!" }' upon successful deletion or '{ "message": "Invalid index" }' if the index is out of range.</li>
</ul>

<h3>Update Form</h3>

<ul>
  <li>Endpoint: <a href="/update">/update</a> </li>
  <li>Method: PUT</li>
  <li>Parameters: 'index' (0-indexed position of the form submission to delete)</li>
  <li>Description: Updates a form submission based on the specified index.</li>
  <li>Response: Returns '{ "message": "Updation successful!" }' upon successful updation or '{ "message": "Invalid index" }' if the index is out of range.</li>
</ul>





