import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../action/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <div className="d-flex flex-column bg-white repos pb-5">
      <p className="text_grad_1 fs-1 text_border mb-0 fw-bolder">
        Github Repos
      </p>

      {repos?.map((repo) => (
        <div key={repo?.id} className="repo bg-white p-2 mb-1">
          <div className="repo_tile_desc">
            <p className="text-primary">
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                <span className="text_primary_special fs-3 fw-bold text-break">
                  {repo.name}
                </span>
              </a>
            </p>
            <p className="fs-5" style={{ color: "#1b1c1d" }}>
              {repo?.description}
            </p>
            {repo?.language && (
              <p className="rounded-pill repo_lang">{repo?.language}</p>
            )}
          </div>

          <div className="repo_badge">
            <div className="badge p-2 badge-primary">
              Stars: {repo.stargazers_count}
            </div>
            <div className="badge p-2 badge-dark">
              Watchers: {repo.watchers_count}
            </div>
            <div className="badge p-2 badge-light">
              Forks: {repo.forks_count}
            </div>
          </div>
        </div>
      ))}

      {repos?.length === 0 && (
        <div className="text-center">
          <h2 className="h2">No Github repo's </h2>
        </div>
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
