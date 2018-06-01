module Api
  module V1
    class EntriesController < ApplicationController
      def index
        @entries = Entry.all
        render json: @entries
      end

      def show
        @entry = Entry.find(params[:id])
        render json: @entry
      end

      def create
        Entry.create(entry_params)
      end

      def update
        Entry.find(params[:id]).update_attributes(entry_params)
      end

      def destroy
        Entry.find(params[:id]).destroy
      end

      private

      def entry_params
        params.permit(:amount, :description, :category, :date, :entry_type, :user_id)
      end
    end
  end
end
