import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

const Breadcrumbs = ({ paths }) => {
    return (
        <nav
            aria-label="breadcrumb"
            className="bg-dark text-light breadcrumb d-flex justify-content-center align-items-center"
            style={{ maxWidth: '1349px', margin: '0 auto', padding: '6px 0' }}
        >
            <Container className="d-flex justify-content-start">
                <ol
                    className="breadcrumb-ol d-flex align-items-center mb-0"
                    style={{ display: 'flex', justifyContent: 'center', margin: 0 }}
                >
                    {paths.map((path, index) => (
                        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                            {index === paths.length - 1 ? (
                                <span>{path.name}</span>
                            ) : (
                                <Link href={path.link} className="py-2">
                                    {path.name}
                                </Link>
                            )}

                            {index < paths.length - 1 && (
                                <span style={{ margin: '0 8px' }}>{'>'}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </Container>
        </nav>
    );
};

export default Breadcrumbs;
