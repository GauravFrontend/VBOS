import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  Link,
  Typography,
  Container,
  styled,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import LoginJWT from "./LoginJWT";

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  () => `
  display: flex;
  width: 100%;
  flex: 1;
  padding: 20px;
`
);

function LoginBasic() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>{t("LOGIN_PAGE.TITLE")}</title>
      </Helmet>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="sm">
            <h3 style={{ textAlign: "center" }}>{t("LOGIN_PAGE.LOGO_PLACEHOLDER")}</h3>
            <Card
              sx={{
                mt: 3,
                px: 4,
                pt: 5,
                pb: 3
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1
                  }}
                >
                  {t("LOGIN_PAGE.SIGN_IN")}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {t("LOGIN_PAGE.FILL_FIELDS")}
                </Typography>
              </Box>
              <LoginJWT />
              <Box my={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t("LOGIN_PAGE.NO_ACCOUNT")}
                </Typography>{" "}
                <Link
                  component={RouterLink}
                  to="/account/register-basic"
                >
                  <b>{t("LOGIN_PAGE.SIGN_UP_HERE")}</b>
                </Link>
              </Box>
            </Card>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default LoginBasic;
