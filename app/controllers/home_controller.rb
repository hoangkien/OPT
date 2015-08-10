class HomeController < ApplicationController
  def index
  end

  def get_session_token
    @token = OP.opentok.generate_token params[:sessionId]
    render :json => {sessionId: @session_id, token: @token, apiKey: OP_CONFIG['API_KEY']}
  end

end
