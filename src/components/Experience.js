import Accordion from 'react-bootstrap/Accordion';


const Experience = () => {
    return (
        <div className='maindiv'>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item  eventKey="0">
            <Accordion.Header><h4>SoftHard S.A.</h4></Accordion.Header>
            <Accordion.Body style={{visibility: 'visible'}}>
            <b>Okres:</b> 2023 - obecnie  <br/>
            <b>Stanowisko:</b> Młodszy konsultant ZSI Papirus SQL <br/>
            <b>Zadania:</b> Prowadzenie procesów wdrożeniowych systemów informatycznych 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><h4>ORLEN S.A.</h4></Accordion.Header>
            <Accordion.Body style={{visibility: 'visible'}}>
            <b>Okres:</b> 2017 - 2022 <br/>
            <b>Stanowisko:</b> Młodszy specjalista <br/>
            <b>Zadania:</b> Czynności administracyjne w zakresie telefonów komórkowych 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
      );
    }
    
export default Experience;