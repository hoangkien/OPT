class HomeController < ApplicationController
  def index
  end

  def get_session_token
    opentok = OpenTok::OpenTok.new OP_CONFIG['API_KEY'], OP_CONFIG['SECRET']
    session = opentok.create_session
    @session_id = session.session_id
    @token = opentok.generate_token @session_id
    render :json => {sessionId: @session_id, token: @token, apiKey: OP_CONFIG['API_KEY']}
  end

end
