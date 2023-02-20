import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import projects from '../data/projects';

const ProjectBody = (props) => {
  return (
    <Container>
      {projects.map((project) => {
        return (
          <Row className='my-3'>
            <Col xs={4}>
              <Image
                rounded
                className='w-100'
                src={require('../images/' + project.img + '.png')}
                alt={props.label}
              ></Image>
            </Col>
            <Col xs={8}>
              <h5>{project.subtitle}</h5>
              <h2>{project.label}</h2>
              <hr className='underline' />
              <p>{project.description}</p>
              <p>
                Check out{' '}
                <a
                  href={project.url}
                  rel='noreferrer'
                  target='_blank'
                >
                  {project.label}
                </a>
              </p>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default ProjectBody;
