/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useEffect, useRef, useState } from "react";

const MainView = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [inputValue, setInputValue] = useState<string>("멋지다 연진아~");
  const [fontSize, setFontSize] = useState<number>(16);
  const [canvasDataUrl, setCanvasDataUrl] = useState<string>();

  const updateCanvas = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = `/yeonjin.jpeg`;

    if (ctx) {
      image.onload = () => {
        ctx.drawImage(image, 0, 0, 600, 300);

        ctx.font = `${fontSize}px Calibri`;
        ctx.textAlign = "center";
        ctx.fillStyle = "#fff";
        ctx.fillText(inputValue, canvas.width / 2, canvas.height - 20);

        setCanvasDataUrl(canvas.toDataURL());
      };
    }
  }, [fontSize, inputValue]);

  useEffect(() => {
    updateCanvas();
  }, [canvasRef, updateCanvas]);

  const onChangeTextInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  const onChangeFontSelect = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    if (Number.isNaN(Number(value))) return;

    setFontSize(Number(value));
  };

  return (
    <Wrap>
      <img src={canvasDataUrl} alt={`${inputValue}`} />
      <Canvas ref={canvasRef} width={600} height={300} hidden />
      <Input
        type="text"
        onChange={onChangeTextInput}
        placeholder="대사를 해보세요"
        defaultValue={inputValue}
      />
      <Select onChange={onChangeFontSelect} value={fontSize}>
        {[...new Array(10)].map((_, i) => {
          const value = 12 + i * 2;

          return (
            <option value={value} key={i}>
              {value}px
            </option>
          );
        })}
      </Select>
      <a href={canvasDataUrl} download={`${inputValue}.png`}>
        <DownloadLink>다운로드</DownloadLink>
      </a>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 600px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 1rem;

  margin: 5rem auto;
  padding: 0 1rem;

  img {
    width: 100%;
  }
`;

const Canvas = styled.canvas`
  width: 600px;
  height: 300px;
`;

const style = css`
  width: 100%;
  height: 40px;

  appearance: none;
  border: none;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  outline: none;

  background-color: #fff;
  box-shadow: 0 2.5px 0px 0px #dedede;
  color: #333;
`;

const Input = styled.input`
  ${style}
`;

const Select = styled.select`
  ${style}
`;

const DownloadLink = styled.button`
  ${style}
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(2.5px);
    box-shadow: none;
  }
`;

export default MainView;
