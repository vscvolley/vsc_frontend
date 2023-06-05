import { default as Button } from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import UploadService from "../../Servicos/UploadSevice";
import vsc from '../imgs/volleyball.svg';

export default class Relatorios extends Component {      
  constructor(props) {
          super(props);

          this.state = {
            selectedFiles: undefined,
            currentFile: undefined,
            progress: 0,
            message: "",


            fileInfos: [],
          };}


          selectFile= (event) => {
            this.setState({
              selectedFiles: event.target.files,
            });
          }
          
          upload= () => {
            let currentFile = this.state.selectedFiles[0];

            this.setState({
              progress: 0,
              currentFile: currentFile,
            });
        
            UploadService.upload(currentFile, (event) => {
              this.setState({
                progress: Math.round((100 * event.loaded) / event.total),
              });
            })
              .then((response) => {
                this.setState({
                  message: response.data.message,
                });
                return UploadService.getFiles();
              })
              .then((files) => {
                this.setState({
                  fileInfos: files.data,
                });
              })
              .catch(() => {
                this.setState({
                  progress: 0,
                  message: "Não foi possivel fazer upload!",
                  currentFile: undefined,
                });
              });
        
            this.setState({
              selectedFiles: undefined,
            });
          }

          componentDidMount= () => {
            UploadService.getFiles().then((response) => {
              this.setState({
                fileInfos: response.data,
              });
            });
          }

          Gerar= () => {
            UploadService.pdf().then((response) => {
              this.setState({
                message: response.data.message,
              });
              return UploadService.getFiles();
            })
            .then((files) => {
              this.setState({
                fileInfos: files.data,
              });
            })
          }

          delete = (index) => {
              UploadService.del(index).then((response) => {
                this.setState({
                  message: response.data.message,
                });
                return UploadService.getFiles();
              })
              .then((files) => {
                this.setState({
                  fileInfos: files.data,
                });
              })
           }
              

          VSC({vsc}){
           vsc= {vsc};
          }


          render() {

            const {
              selectedFiles,
              currentFile,
              progress,
              message,
              fileInfos,
            } = this.state;
        
            return (
            
              <div width={'100vw'}>
                <div className="card" bordercolor='blue' component={Paper} elavation={6} style={{display:'flex-inline', backgroundColor: '#41a5f5' , minHeight:'8vh', borderRadius:0, justifyContent:'center', alignItems:'center'}} maxwidth={'100vw'}>
                  <h5>Relatório</h5>
                  <img alt='' src={vsc}  height='35vw' width='40vw'/>
                </div>
                <div className="card" minheight={'2vh'}></div>
                {currentFile && (
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-info progress-bar-striped"
                      role="progressbar"
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: progress + "%" }}
                    >
                      {progress}%
                    </div>
                  </div>
                )}
                  <label className="btn btn-default" style={{paddingTop:'2vh'}}>
                    <input type="file" onChange={this.selectFile}/>
                  </label>

                  <button className="btn btn-success"
                    disabled={!selectedFiles}
                    onClick={this.upload}
                  >
                    Upload
                  </button>
                <div className="alert alert-light" role="alert">
                  {message}
                </div>
                <div className="card" >
                  <div  component={Paper} >Ficheiros</div>
                  <ul className="list-group list-group-flush">
                    {fileInfos &&
                      fileInfos.map((file, index) => (
                        <li className="list-group-item" key={index} style={{display:'inline-flex'}}>
                          <div style={{textAlign:'left',width:'50vw'}}>
                            <Button href={file.url}>{file.nome}</Button>
                          </div>
                          <div style={{textAlign:'right',width:'50vw'}}>
                            <Button style={{ color:'red'}} onClick={() => this.delete(index)}>Apagar</Button>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                <div  className="button" style={{top:'40px',position:'relative',maxwidth:'100vw',minHeight:'10vh', justifyContent:'center',alignItems:'center',display:'flex'}}>
                  <Button style={{backgroundColor:'darkgreen'}}>
                    <NavLink onClick={this.Gerar} style={{color:'white',textDecoration: 'none'}}>
                        Gerar PDF
                    </NavLink>
                  </Button>
                </div>
                <div  className="button" style={{bottom:'10px',left:'10px',position:'fixed', background:'lightblue',border:'none', borderRadius:4}}>
                  <Button size='small'>
                    <NavLink to="/interface" style={{color:'white',textDecoration: 'none'}}>
                        Voltar
                    </NavLink>
                  </Button>
                </div>
              </div>
            );
          }

  }