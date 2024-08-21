<template>
    <div>
      <h1>Your Certificate</h1>
      <p>Congratulations! You have completed the course.</p>
      <button @click="downloadCertificate">Download Certificate</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Certificate',
    methods: {
      downloadCertificate() {
        // Logic to download the certificate
      },
    },
  };
  </script>
  