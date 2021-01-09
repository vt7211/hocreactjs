import './HomePage.css';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import Container from '../../common/Container';
import Title from '../../common/Title'
import Article from '../../common/Article';

export default function HomePage() {
  const listCat = [
    {
      name: 'cat 1',
      link: '#'
    },
    {
      name: 'cat 2',
      link: '#'
    }
  ];
  return (
    <>
    <div className="latest-news section">
      <Container>
      <Title main spacing>Latest Articles</Title>
      <div className="latest-news__list spacing">
          <Article
            thumbnail="/images/blog-1.jpg"
            alt="blog 1"
            link="#"
            linkauthor="#"
            title="Tiêu đề blog 1"
            avartar="/images/avatar1.jpg"
            date="1.1.2020"
            time="1 minute"
            author="van tan"
          />
          <Article
            thumbnail="/images/blog-1.jpg"
            alt="blog 1"
            link="#"
            linkauthor="#"
            title="Tiêu đề blog 2"
            avartar="/images/avatar2.jpg"
            date="2.1.2020"
            time="2 minute"
            author="phan thao"
          />
          <Article
            thumbnail="/images/blog-1.jpg"
            alt="blog 3"
            link="#"
            linkauthor="#"
            title="Tiêu đề blog 3"
            avartar="/images/avatar3.jpg"
            date="3.1.2020"
            time="3 minute"
            author="van tan"
          />
      </div>
      </Container>
    </div>
    {/* End Latest News List */}

    <div className="popular-news section bg-white-blue">
      <Container>
        {/* Main Title */}
        <Title link="#" more="View More" main spacing className="d-flex tcl-jc-between tcl-ais-center">
          Popular Articles
        </Title>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              <Article
                thumbnail="/images/blog-1.jpg"
                alt="blog 1"
                link="#"
                linkauthor="#"
                title="Tiêu đề blog 1"
                avartar="/images/avatar1.jpg"
                date="1.1.2020"
                time="1 minute"
                author="van tan"
                type="popular"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim in sint deleniti dolorem. Esse autem aperiam quia cum molestias quisquam, eligendi sit quo eum. Esse corrupti earum debitis atque."
                listCat={listCat}
              />
              <Article
                thumbnail="/images/blog-1.jpg"
                alt="blog 2"
                link="#"
                linkauthor="#"
                title="Tiêu đề blog 2"
                avartar="/images/avatar2.jpg"
                date="1.1.2020"
                time="1 minute"
                author="van tan"
                type="popular"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim in sint deleniti dolorem. Esse autem aperiam quia cum molestias quisquam, eligendi sit quo eum. Esse corrupti earum debitis atque."
                listCat={listCat}
              />
              
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              <Article
                thumbnail="/images/blog-1.jpg"
                alt="blog 1"
                link="#"
                linkauthor="#"
                title="Tiêu đề blog 1"
                avartar="/images/avatar1.jpg"
                date="1.1.2020"
                time="4 minute"
                author="van tan"
                type="popular-right"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum enim in sint deleniti dolorem. Esse autem aperiam quia cum molestias quisquam, eligendi sit quo eum. Esse corrupti earum debitis atque."
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
    {/* End Popular News Section */}

   
    <div className="articles-list section">
      <Container>
        <Title link="#" more="View More" main spacing className="d-flex tcl-jc-between tcl-ais-center">
          News List
        </Title>
        
        <div className="tcl-row">
          <Article
            thumbnail="/images/blog-1.jpg"
            alt="blog 1"
            link="#"
            linkauthor="#"
            title="Only Someone Who's Seen The Mummy Will Pass This"
            avartar="/images/avatar1.jpg"
            date="1.1.2020"
            time="4 minute"
            author="van tan"
            type="list"
          />
          <Article
            thumbnail="/images/blog-1.jpg"
            alt="blog 2"
            link="#"
            linkauthor="#"
            title="Only Someone Who's Seen The Mummy Will Pass This"
            avartar="/images/avatar1.jpg"
            date="1.1.2020"
            time="4 minute"
            author="van tan"
            type="list"
          />
          <Article
            thumbnail="/images/blog-1.jpg"
            alt="blog 3"
            link="#"
            linkauthor="#"
            title="Only Someone Who's Seen The Mummy Will Pass This"
            avartar="/images/avatar1.jpg"
            date="1.1.2020"
            time="4 minute"
            author="van tan"
            type="list"
          />
          <Article
            thumbnail="/images/blog-1.jpg"
            alt="blog 4"
            link="#"
            linkauthor="#"
            title="Only Someone Who's Seen The Mummy Will Pass This"
            avartar="/images/avatar1.jpg"
            date="1.1.2020"
            time="4 minute"
            author="van tan"
            type="list"
          />
        </div>
        
        <div className="text-center">
          <Button isSizeLarge isLoading btnType="primary">Load more</Button>
        </div>

      </Container>
    </div>
    
  </>
  );
}