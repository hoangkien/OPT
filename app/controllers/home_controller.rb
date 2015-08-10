class HomeController < ApplicationController
  def index
  end

  def get_session_token
    session = OP.opentok.create_session(:media_mode => :routed) # auto record :archive_mode => :always
    @session_id = session.session_id
    @token = OP.opentok.generate_token @session_id
    render :json => {sessionId: @session_id, token: @token, apiKey: OP_CONFIG['API_KEY']}
  end

end
