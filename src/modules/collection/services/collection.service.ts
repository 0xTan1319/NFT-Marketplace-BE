import { Injectable } from '@nestjs/common';
import {
  CreateCollectionDto,
  CreateAttributeDto,
  NFTCollectionsDto,
} from '../dto/collection.dto';
import { PrismaService } from '@prisma/prisma.service';
import { GeneratorService, Web3Service } from '@common/providers';
import { Collection, Prisma } from '@prisma/client';

@Injectable()
export class CollectionService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly web3Service: Web3Service,
    private generatorService: GeneratorService,
  ) {}
  async getCollections() {
    return this.prismaService.collection.findMany({
      include: {
        avatar: true,
        banner: true,
        creator: true,
      },
    });
  }
  async createCollection(
    userId: string,
    data: Omit<Prisma.CollectionCreateInput, 'id' | 'creator'>,
  ) {
    return this.prismaService.collection.create({
      data: {
        ...data,
        id: this.generatorService.uuid(),
        creator: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  public async getCollection(
    args: Prisma.CollectionFindUniqueArgs,
  ): Promise<Collection> {
    return await this.prismaService.collection.findUnique({
      include: { avatar: true, banner: true, creator: true },
      ...args,
    });
  }

  async createAttribute(
    collectionId: string,
    createAttributeDto: CreateAttributeDto,
  ) {
    // Logic to create an attribute for a collection
  }
  async getContracts() {
    return this.web3Service.getERC721Contracts();
  }
  async getConts({ chainId, walletAddress }: NFTCollectionsDto) {
    return this.web3Service.getNFTSbyAddress({ chainId, walletAddress });
  }
}
