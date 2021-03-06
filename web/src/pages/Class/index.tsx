import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import AvatarContainer from '@material-ui/core/Avatar';
import AddSubject from '../../components/Chat/AddSubject';
import StickyBox from 'react-sticky-box'

import TableDesktop from '../../components/Table_Desktop';
import TableMobile from '../../components/Table_Mobile';

import { Container, Main } from '../../components/AppLayout/styles';
import { 
  Subject,
  ClassInfoBlock,
  ClassBlock,
  Wrapper,
  SubjectHeader,
  Content,
  ContentHeader
} from './styles';
import roadToKnowledgeImg from '../../assets/images/undraw_road_to_knowledge_m8s0.svg';
import { AuthContext } from '../../contexts';
import api from '../../services/api';
import moment from '../../utils/moment';

interface classParams {
  id: string;
}

const Class: React.FC = () => {
  const { data, setData } = useContext(AuthContext);
  const { id } = useParams<classParams>();
  const [ pushDown, setPushDown ] = useState('push-up');
  const [ subjectsNumber, setSubjectsNumber ] = useState(2);

  const { user, uClass, subjects } = data;

  useEffect(() => {
    api.get(`/inatec/class/${id}`)
    .then(response => {
      const clas = response.data
      setData({...data, uClass: clas})
    })

    api.get(`inatec/get/subjects/${subjectsNumber}/${id}`)
    .then(response => {
      const subjectsResponse = response.data;
      setData({...data, subjects: subjectsResponse})
    })
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectsNumber]) 


  return (
    <Container>
      {
        uClass && (
          <>
            <AddSubject 
              setPushDown={setPushDown}
              pushDown={pushDown}
              username={user.username}
              avatar={user.avatar}
              course={uClass.course}
              year={uClass.year}
              time={uClass.time}
              disciplines={uClass.disciplines}
            />

            <Main id={pushDown}>
              <Wrapper>
                <h1>{uClass.course}</h1>
                <ClassBlock>
                  {
                    subjects && (
                      <Subject>
                        <SubjectHeader>
                          <img src={roadToKnowledgeImg} alt="Caminho para o conhecimento"/>
                          <div>
                            <h3> 
                              {
                                subjects[0] ? (
                                  subjects[0].subjectsCreatedNumber
                                ): 0
                              } Trabalhos e temas debatidos
                            </h3>
                          </div>
                        </SubjectHeader>

                        {
                          subjects.map((subject) => {
                            let titleParts = '';
                            subject.title.split(" ").map(word => {
                              return titleParts = `${titleParts}-${word}`;
                            })

                            return (
                              <Content key={subject.id}>
                                <Link to={`/in/chats/${titleParts}/${subject.id}`}>
                                  <ContentHeader>
                                    <AvatarContainer>
                                      <img src={subject.avatar} alt="Criador do tema"/>
                                    </AvatarContainer>
                                    <div>
                                      <div>
                                        <h3>{subject.name}</h3>
                                        <span>{subject.teacher ? 'Docente' : 'Aluno'}</span>
                                      </div>
                                      <div>{subject.module}</div>
                                    </div>
                                  </ContentHeader>

                                  <div>
                                    <h2>{subject.title}</h2>
                                    <p>
                                      {subject.description}
                                    </p>
                                    <span>{moment(subject.updated_at)}</span>
                                  </div>
                                </Link>
                              </Content>
                            )
                          })
                        }
                        <button onClick={() => { setSubjectsNumber(subjectsNumber + 3) }}>
                          Mostrar mais 3
                        </button>
                      </Subject>
                    )
                  }

                  {
                    !subjects  && (
                      <p>Carregando...</p>
                    )
                  }
                  <StickyBox>
                    <ClassInfoBlock>
                      <TableDesktop />
                      <TableMobile />
                    </ClassInfoBlock>
                  </StickyBox>

                </ClassBlock>
              </Wrapper>
            </Main>
          </>
        )
      }

      {
        !uClass && (
          <p>Carregando...</p>
        )
      }
    </Container>
  )
}

export default Class;