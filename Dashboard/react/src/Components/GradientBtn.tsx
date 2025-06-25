import styled from 'styled-components';

function GradientBtn(props : any) {
  return (
    <StyledWrapper>
      <button className="neu-button">{props.BtnName}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .neu-button {
    // background-color: #e0e0e0;
    border-radius: 20px;
    box-shadow: inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff;
    color: #4d4d4d;
    cursor: pointer;
    font-size: 18px;
    padding: 12px 30px;
    transition: all 0.2s ease-in-out;
    border: 2px solid rgb(206, 206, 206);
    position:relative;
    overflow:hidden;
    z-index:1;
    transition:all 0.5s ease;
  }

  .neu-button::before {
    content : '';
    position : absolute;
    left:0;
    top:0;
    width:0px;
    height:100%;
    z-index:-1;
    background: #a168a1;
    transition:all 0.5s ease;
    border-radius:20px;
    background: linear-gradient(121deg, rgba(161, 104, 161, 0.7) 0%, rgba(120, 153, 158, 0.78) 52%, rgba(41, 63, 148, 0.62) 100%);
  }

  .neu-button:hover::before {
    width:100%;
  }

  .neu-button:hover {
    color:white;
  }


  .neu-button:focus {
    outline: none;
    box-shadow: inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff;
  }`;

export default GradientBtn;
