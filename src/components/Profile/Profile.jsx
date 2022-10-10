import PropTypes from 'prop-types';
import {
  Container,
  Wrapper,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  StatsList,
  StatsItem,
  StatsText,
  StatsQuantities,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Wrapper>
        <ProfileImage src={avatar} alt="User avatar" />
        <ProfileInfo>
          <ProfileName>{username}</ProfileName>
          <ProfileTag>@{tag}</ProfileTag>
          <ProfileLocation>{location}</ProfileLocation>
        </ProfileInfo>
      </Wrapper>

      <StatsList>
        <StatsItem>
          <StatsText>Followers </StatsText>
          <StatsQuantities>{stats.followers}</StatsQuantities>
        </StatsItem>
        <StatsItem>
          <StatsText>Views </StatsText>
          <StatsQuantities>{stats.views}</StatsQuantities>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes </StatsText>
          <StatsQuantities>{stats.likes}</StatsQuantities>
        </StatsItem>
      </StatsList>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
