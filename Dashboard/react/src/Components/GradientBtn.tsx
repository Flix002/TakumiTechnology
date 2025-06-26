import styled from 'styled-components';

function GradientBtn(props : any) {
  return (
    <StyledWrapper>
      <button>
        <span className="text">{props.BtnName}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    align-items: center;
    background-image: linear-gradient(144deg, #454545, #211a4f 50%, #a302b5);
    border: 0;
    border-radius: 25px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-size: 14px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    overflow: hidden;
  }

  button:active,
  button:hover {
    outline: 0;
  }

  button span {
    background-color: rgb(5, 6, 45);
    padding: 20px 24px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  button:hover span {
    background: none;
  }

  button:active {
    transform: scale(0.9);
  }`;

export default GradientBtn;
