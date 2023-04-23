import React from 'react';

const AboutUs =()=>{

    return(
        <div>
    <h2 className='aboutUs'>Quienes somos</h2>
    <p className='aboutUs'>Nullam quis risus eget <a href="nav-link">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
    <p className='aboutUs'><small>This line of text is meant to be treated as fine print.</small></p>
    <p className='aboutUs'>The following is <strong>rendered as bold text</strong>.</p>
    <p className='aboutUs'>The following is <em>rendered as italicized text</em>.</p>
    <p className='aboutUs'>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
        </div>
)
}

export default AboutUs;