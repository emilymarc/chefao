import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginClient, baseUrl } from "../../services/api";
import jwt_decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import logo from '../../assets/logofooter.png';
import { toast } from "react-toastify";
import { signIn } from "../../redux/feature/userSlice";

const validationSchema = Yup.object({
    email: Yup.string().email("E-mail não válido").required("Valor é requerido"),
    password: Yup.string().required("Valor é requerido"),
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async values => {
            const { email, password } = values;
            const accessTokenObject = await loginClient(email, password);
            const accessToken = accessTokenObject.token
            const decoded = jwt_decode(accessToken);
            // localStorage.setItem('clientToken', accessToken);
            // localStorage.setItem('clientInfo', JSON.stringify(decoded));
            dispatch(signIn({id_client: decoded.id_client, name: decoded.name, email: decoded.email, isLogged: true, accessToken}));
            baseUrl.defaults.headers["Authorization"] = `Bearer ${accessToken}`
            navigate('/');
            toast("Seja bem-vindo!")
        }
    })

    return (
        <S.Container>
            <S.Logo to='/'>
                <img src={logo} alt="República Hippie"/>
            </S.Logo>
            

            <S.FormContainer onSubmit={formik.handleSubmit}>
                <S.TittleForm>LOGIN</S.TittleForm>
                <S.FloatContainer className="floatContainer1">
                    <S.InputTittle htmlFor="floatField1">Email</S.InputTittle>
                    <S.FormInput 
                    type="email" 
                    className="floatContainer1"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}/>
                </S.FloatContainer>
                {formik.errors.email && <span>{formik.errors.email}</span>}
                <S.FloatContainer className="floatContainer2">
                    <S.InputTittle htmlFor="floatField2">Senha</S.InputTittle>
                    <S.FormInput 
                    type="password" className="floatContainer2"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}/>
                </S.FloatContainer>
                {formik.errors.password && <span>{formik.errors.password}</span>}
                <S.FormButton type="submit">Entrar</S.FormButton>
                <S.LinkSingUp to="/signup">Cadastre-se</S.LinkSingUp>
            </S.FormContainer>

        </S.Container>
    )
}

export default LoginForm