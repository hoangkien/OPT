class ArchivesController < ApplicationController
  def start
    archive = OP.opentok.archives.create params[:sessionId],{
      :name => "New Record",
      :has_video => true,
      :has_audio => true,
      :output_mode => :composed
    } rescue nil
    render :json => {:message => :ok}
  end

  def stop
    archive = OP.opentok.archives.find params[:archiveID]
    Rails.logger.info"AAAAAAAAAAAAAAA #{archive.id}"
    OP.opentok.archives.stop_by_id params[:archiveID] rescue nil
    render json: {"Message": "Stopped"}
  end

  def view
    archive = OP.opentok.archives.find(params[:archiveID])
    render :json => {:message => :opentok}
  end

end
