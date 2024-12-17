import React, { memo, useState, useEffect } from "react";
import { Box, Container, Toolbar, MenuItem, AppBar, Typography, TextField, Button } from '@mui/material';
import styles from './_home.module.scss';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { findBySbd } from './StatisticService';

interface Statistic {
  sbd: string;
  toan: string | null;
  van: string | null;
  anh: string | null;
  ly: string | null;
  hoa: string | null;
  sinh: string | null;
  tbKhtn: string | null;
  gdcd: string | null;
  su: string | null;
  dia: string | null;
  tbKhxh: string | null;
}
function Home() {
  const [sbd, setSbd] = useState("");
  const [data, setData] = useState<Statistic | null>(null);

  const handleSubmit = () => {
    findBySbd(sbd)
      .then((res: any) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Container maxWidth={false} disableGutters className={styles.home}>
      {/* Header */}
      <Container maxWidth={false} className={styles.appbar}>
        <Container maxWidth="lg" className={styles.container}>
          <img src={`${process.env.PUBLIC_URL}/bo-giao-duc.png`} />
          <Box className={styles.box}>
            <Typography className={styles.typography1}>
              SỞ GIÁO DỤC VÀ ĐÀO TẠO HÀ NỘI
            </Typography>
            <Typography className={styles.typography2}>
              TRANG THÔNG TIN KỲ THI TỐT NGHIỆP THPT 2024
            </Typography>
          </Box>
        </Container>
      </Container>
      {/* Body */}
      <Container className={styles.body}>
        <Container className={styles.center}>
          <Box className={styles.titleBox}>
            <Typography className={styles.titleSmall}>SỞ GIÁO DỤC VÀ ĐÀO TẠO HÀ NỘI</Typography>
            <Typography className={styles.titleBig}>TRA CỨU ĐIỂM THI TỐT NGHIỆP THPT 2024</Typography>
          </Box>
          <i className={styles.note}>Thí sinh nhập số báo danh vào ô dưới đây</i>
          <Box>
            <TextField id="filled-basic" className={styles.textField} label="Số báo danh" variant="outlined" autoFocus={true} onChange={e => setSbd(e.target.value)} onKeyPress={handleKeyPress} />
          </Box>
          <Button className={styles.btn} onClick={handleSubmit} variant="contained">Tra cứu </Button>

          <Container className={styles.statistic}>
            {data?.toan &&
              <Typography className={styles.subject}>
                Toán: {data?.toan}
              </Typography>
            }
            {data?.van &&
              <Typography className={styles.subject}>
                Ngữ văn: {data?.van}
              </Typography>
            }
            {/* KHTN */}
            {data?.tbKhtn &&
              <>
                <Typography className={styles.subject}>
                  Vật lí: {data.ly ? data.ly : "0"}
                </Typography>
                <Typography className={styles.subject}>
                  Hóa: {data.hoa ? data.hoa : "0"}
                </Typography>
                <Typography className={styles.subject}>
                  Sinh học: {data.sinh ? data.sinh : "0"}
                </Typography>
                <Typography className={styles.subject}>
                  KHTN: {data?.tbKhtn}
                </Typography>
              </>
            }
            {/* KHXH */}
            {data?.tbKhxh &&
              <>
                <Typography className={styles.subject}>
                  Lịch sử: {data.su ? data.su : "0"}
                </Typography>
                <Typography className={styles.subject}>
                  Địa lí: {data.dia ? data.dia : "0"}
                </Typography>
                <Typography className={styles.subject}>
                  GDCD: {data.gdcd ? data.gdcd : "0"}
                </Typography>
                <Typography className={styles.subject}>
                  KHXH: {data?.tbKhxh}
                </Typography>
              </>
            }
            {data &&
              <Typography className={styles.subject}>
                Tiếng anh: {data.anh ? data.anh : "0"}
              </Typography>
            }
          </Container>
          {data &&
            <i>Ghi chú: Dấu (*) thể hiện điểm thi sau phúc khảo</i>
          }
        </Container>
      </Container>

      {/* Footer */}
      <Box className={styles.footer}>
        <Typography className={styles.typography}>SỞ GIÁO DỤC VÀ ĐÀO TẠO HÀ NỘI</Typography>
      </Box>
    </Container>
  );
}

export default Home;