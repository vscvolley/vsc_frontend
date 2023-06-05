import http from "../http-common";

 function upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("http://localhost:8080/Ficheiros/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    })
  }

  function pdf(){
    return http.get("http://localhost:8080/Ficheiros/pdf");
 }


 function getFiles() {
    return http.get("http://localhost:8080/Ficheiros/files");
  }

  function del(id) {

    let formData = new FormData();
    formData.append("id", id);
    return http.post("http://localhost:8080/Ficheiros/delete", formData,{
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }


const UploadService={
  upload,
  pdf,
  getFiles,
  del,
}

export default UploadService;